"use client";
import { AffiliateDuoToneBlack, Compass, CreditCard, Dashboard, FileDuoToneBlack, Settings, ZapDouToneBlack } from "@/icons";
import { Chip } from "@/icons/chip";
import { Funnel } from "@/icons/funnel";
import { Media } from "@/icons/media";
import { Pipeline } from "@/icons/pipeline";
import { Agency, SubAccount } from "@prisma/client";
import clsx from "clsx";
import { ChevronsUpDown, Menu, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Fa500Px } from "react-icons/fa";
import { useModal } from "../../../providers/model-provider";
import SubAccountDetails from "../forms/Subaccount_form";
import CustomModal from "../global/CustomModal";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

type Props = {
  type: string;
  defaultOption?: boolean;
  subAccounts: SubAccount[];
  sideBarOpt: any;
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
};

function MenuOptions({ type, defaultOption, subAccounts, sideBarOpt, sidebarLogo, details, user, id }: Props) {
  const { setOpen } = useModal();

  const openState = useMemo(() => (defaultOption ? { open: true } : {}), [defaultOption]);

  const iconMapping: { [key: string]: JSX.Element } = {
    category: <Dashboard />,
    clipboardIcon: <FileDuoToneBlack />,
    payment: <CreditCard />,
    settings: <Settings />,
    person: <AffiliateDuoToneBlack />,
    shield: <ZapDouToneBlack />,
    pipelines: <Funnel />,
    database: <Media />,
    chip: <Chip />,
    flag: <Pipeline />,
  };

  return (
    <Sheet
      modal={false}
      {...openState}
    >
      <SheetTrigger
        asChild
        className=" absolute left-4 top-4 z-[100] md:hidden flex"
      >
        <Button
          size={"icon"}
          variant={"outline"}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className={clsx(" bg-background/80 backdrop-blur-xl fixed borde-r-[1px] p-6 pt-7", {
          "hidden md:inline-block z-0 w-[300px]": defaultOption,
          "inline-block md:hidden z-[100] w-full": !defaultOption,
        })}
      >
        <div>
          <div className="relative">
            {type === "agency" ? (
              <AspectRatio ratio={16 / 5}>
                <Image
                  src={sidebarLogo}
                  alt="logo"
                  fill
                  className="!rounded-md object-cover mb-3"
                />
              </AspectRatio>
            ) : (
              <div className="relative right-0 flex items-center w-full overflow-x-hidden mb-3">
                <Image
                  src={sidebarLogo}
                  alt="logo"
                  width={400}
                  height={400}
                  className="!rounded-md w-10 h-10"
                />
                <h1 className=" text-xl font-medium mx-3">{details.name}</h1>
                {/* <Separator/> */}
              </div>
            )}
          </div>
          <Popover>
            <PopoverTrigger
              asChild
              className="element"
            >
              <div className="inline-flex cursor-pointer px-2 items-center justify-between whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full my-4 py-4">
                <div className="flex  items-center text-left gap-4 ">
                  <Compass />
                  <div className="flex flex-col">
                    {details.name}
                    <span className="text-muted-foreground">{details.address.substring(0, 15)}...</span>
                  </div>
                </div>
                <div>
                  <ChevronsUpDown
                    size={16}
                    className="text-muted-foreground"
                  />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className=" h-64 w-60 mt-4 p-3 z-[200] box">
              <Command className="rounded-lg">
                <CommandInput placeholder="Search Accounts..." />
                <CommandList className="pb-16">
                  <CommandEmpty> No results found</CommandEmpty>
                  {(user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") && user?.Agency && (
                    <CommandGroup heading="Agency">
                      <CommandItem className="!bg-transparent my-2 text-primary broder-[1px] border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all">
                        {defaultOption ? (
                          <Link
                            href={`/agency/${user?.Agency?.id}`}
                            className="flex gap-4 w-full h-full"
                          >
                            <div className="relative w-16">
                              <Image
                                src={user?.Agency?.agencyLogo}
                                alt="Agency Logo"
                                fill
                                className="rounded-md object-contain"
                              />
                            </div>
                            <div className="flex flex-col flex-1">
                              {user?.Agency?.name}
                              <span className="text-muted-foreground">{user?.Agency?.address}</span>
                            </div>
                          </Link>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={`/agency/${user?.Agency?.id}`}
                              className="flex gap-4 w-full h-full"
                            >
                              <div className="relative w-16">
                                <Image
                                  src={user?.Agency?.agencyLogo}
                                  alt="Agency Logo"
                                  fill
                                  className="rounded-md object-contain"
                                />
                              </div>
                              <div className="flex flex-col flex-1">
                                {user?.Agency?.name}
                                <span className="text-muted-foreground">{user?.Agency?.address}</span>
                              </div>
                            </Link>
                          </SheetClose>
                        )}
                      </CommandItem>
                    </CommandGroup>
                  )}
                  <CommandGroup heading="Su accounts">
                    {!!subAccounts
                      ? subAccounts.map((subaccount) => (
                          <CommandItem key={subaccount.id}>
                            {defaultOption ? (
                              <Link
                                href={`/subaccount/${subaccount.id}`}
                                className="flex gap-4 w-full h-full"
                              >
                                <div className="relative w-10">
                                  <Image
                                    src={subaccount.subAccountLogo}
                                    alt="subaccount Logo"
                                    fill
                                    className="rounded-md object-contain"
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  {subaccount.name}
                                  <span className="text-muted-foreground">{subaccount.address}</span>
                                </div>
                              </Link>
                            ) : (
                              <SheetClose asChild>
                                <Link
                                  href={`/subaccount/${subaccount.id}`}
                                  className="flex gap-4 w-full h-full"
                                >
                                  <div className="relative w-16">
                                    <Image
                                      src={subaccount.subAccountLogo}
                                      alt="subaccount Logo"
                                      fill
                                      className="rounded-md object-contain"
                                    />
                                  </div>
                                  <div className="flex flex-col flex-1">
                                    {subaccount.name}
                                    <span className="text-muted-foreground">{subaccount.address}</span>
                                  </div>
                                </Link>
                              </SheetClose>
                            )}
                          </CommandItem>
                        ))
                      : "No Accounts"}
                  </CommandGroup>
                </CommandList>
                {(user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") && (
                  <SheetClose>
                    <Button
                      size={"sm"}
                      className="w-full flex gap-2  bg-blue-500 text-white hover:bg-blue-700 "
                      onClick={() => {
                        setOpen(
                          <CustomModal
                            title="Create A Subaccount"
                            subheading="You can switch between your agency account and the subaccount from the sidebar"
                          >
                            <SubAccountDetails
                              agencyDetails={user?.Agency as Agency}
                              userId={user?.id as string}
                              userName={user?.name}
                            />
                          </CustomModal>
                        );
                      }}
                    >
                      <PlusCircleIcon size={15} />
                      Create Sub Account
                    </Button>
                  </SheetClose>
                )}
              </Command>
            </PopoverContent>
          </Popover>
          <p className="text-muted-foreground text-xs mb-2">MENU LINKS</p>
          <Separator className="mb-4" />
          <nav className="relative">
            <Command className="rounded-lg overflow-visible bg-transparent">
              <CommandInput placeholder="Search..." />
              <CommandList className="py-4 overflow-visible">
                <CommandEmpty>No Results Found</CommandEmpty>
                <CommandGroup className="overflow-visible">
                  {sideBarOpt.map((sidebarOptions: any) => {
                    const IconComponent = iconMapping[sidebarOptions.icon] || <Fa500Px />; // Fallback to a default icon if not found
                    return (
                      <CommandItem
                        key={sidebarOptions.id}
                        className="md:w-[320px] w-full mb-1 -ml-1 group"
                      >
                        <Link
                          href={sidebarOptions.link}
                          className="flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]"
                        >
                          <div className="flex items-center gap-4 group-hover:gap-5 duration-300">
                            {IconComponent}
                            {sidebarOptions.name}
                          </div>
                        </Link>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuOptions;
