"use client";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ChartNoAxesGantt, ChevronsUpDown, Menu, PlusCircleIcon } from "lucide-react";
import clsx from "clsx";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { IAgency, ISubAccount } from "@/types/types";
import { useMemo } from "react";
import { AffiliateDuoToneBlack, CarotSort, Compass, CreditCard, Dashboard, FileDuoToneBlack, Settings, ZapDouToneBlack } from "@/icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import Link from "next/link";
import SubAccountDetails from "../forms/Subaccount_form";
import { useModal } from "../../../providers/model-provider";
import CustomModal from "../global/CustomModal";
import { Separator } from "../ui/separator";
import { Fa500Px } from "react-icons/fa";
import { Pipeline } from "@/icons/pipeline";
import { Media } from "@/icons/media";
import { Chip } from "@/icons/chip";
import { Funnel } from "@/icons/funnel";

type Props = {
  defaultOption?: boolean;
  subAccounts: ISubAccount[];
  sideBarOptJson: any;
  sidebarLogo: string;
  detailsJson: any;
  userJson: any;
  id: string;
};

function MenuOptions({ defaultOption, subAccounts, sideBarOptJson, sidebarLogo, detailsJson, userJson, id }: Props) {
  const { setOpen } = useModal();

  const openState = useMemo(() => (defaultOption ? { open: true } : {}), [defaultOption]);

  const sideBarOpt = JSON.parse(sideBarOptJson);
  const details = JSON.parse(detailsJson);
  const user = JSON.parse(userJson);

  const iconMapping: { [key: string]: JSX.Element } = {
    category: <Dashboard />, // Dashboard icon
    clipboardIcon: <FileDuoToneBlack />, // Launchpad icon
    payment: <CreditCard />,
    settings: <Settings />, // Settings icon
    person: <AffiliateDuoToneBlack />, // Sub Accounts icon
    shield: <ZapDouToneBlack />, // Team icon
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
        showX={true}
        side="left"
        className={clsx(" bg-background/80 backdrop-blur-xl fixed borde-r-[1px] p-6", {
          "hidden md:inline-block z-0 w-[300px]": defaultOption,
          "inline-block md:hidden z-[100] w-full": !defaultOption,
        })}
      >
        <div>
          <AspectRatio ratio={16 / 5}>
            <Image
              src={sidebarLogo}
              alt="logo"
              fill
              className="!rounded-md object-cover"
            />
          </AspectRatio>
          <Popover>
            <PopoverTrigger asChild>
              <div className="inline-flex px-2 items-center justify-between whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full my-4 py-4">
                <div className="flex items-center text-left gap-4 ">
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
            <PopoverContent className=" h-60 w-60 mt-4 p-3 z-[200] box">
              <Command className="rounded-lg">
                <CommandInput placeholder="Search Accounts..." />
                <CommandList className="pb-16">
                  <CommandEmpty> No results found</CommandEmpty>
                  {(user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") && user?.agencyId && (
                    <CommandGroup heading="Agency">
                      <CommandItem className="!bg-transparent my-2 text-primary broder-[1px] border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all">
                        {defaultOption ? (
                          <Link
                            href={`/agency/${user?.agencyId?._id}`}
                            className="flex gap-4 w-full h-full"
                          >
                            <div className="relative w-16">
                              <Image
                                src={user?.agencyId?.agencyLogo}
                                alt="Agency Logo"
                                fill
                                className="rounded-md object-contain"
                              />
                            </div>
                            <div className="flex flex-col flex-1">
                              {user?.agencyId?.name}
                              <span className="text-muted-foreground">{user?.agencyId?.address}</span>
                            </div>
                          </Link>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={`/agency/${user?.agencyId?.id}`}
                              className="flex gap-4 w-full h-full"
                            >
                              <div className="relative w-16">
                                <Image
                                  src={user?.agencyId?.agencyLogo}
                                  alt="Agency Logo"
                                  fill
                                  className="rounded-md object-contain"
                                />
                              </div>
                              <div className="flex flex-col flex-1">
                                {user?.agencyId?.name}
                                <span className="text-muted-foreground">{user?.agencyId?.address}</span>
                              </div>
                            </Link>
                          </SheetClose>
                        )}
                      </CommandItem>
                    </CommandGroup>
                  )}
                  <CommandGroup heading="Accounts">
                    {!!subAccounts
                      ? subAccounts.map((subaccount) => (
                          <CommandItem key={subaccount.id}>
                            {defaultOption ? (
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
                              agencyDetails={user?.agencyId as IAgency}
                              userId={user?._id as string}
                              userName={user?.username}
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
                        key={sidebarOptions._id}
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
