import React from "react";
import { getUserDetails } from "@/lib/queries";
import { AlertDescription } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import CreateSubaccountButton from "./_components/CreateSubaccountBtn";
import { ISubAccount } from "@/types/types";

type Props = { params: { agencyId: string } };

const page = async ({ params }: Props) => {
  const res = await getUserDetails();
  const user = await res.json(); 
  console.log(user);
  
  if (!user) return;

  return (
    <AlertDialog>
      <div className="flex flex-col ">
        <CreateSubaccountButton
          user={user}
          id={params.agencyId}
          className="w-[200px] self-end m-6"
        />
        <Command className="rounded-lg bg-transparent">
          <CommandInput placeholder="Search Account..." />
          <CommandList>
            <CommandEmpty>No Results Found.</CommandEmpty>
            <CommandGroup heading="Sub Accounts">
              {!!user.agencyId?.subAccountsId.length ? (
                user.agencyId.subAccountsId.map((subaccount: ISubAccount) => (
                  <CommandItem
                    key={subaccount._id as string}
                    className="h-32 !bg-background my-2 text-primary border-[1px] border-border p-4 rounded-lg hover:!bg-background cursor-pointer transition-all"
                  >
                    <Link
                      href={`/subaccount/${subaccount._id}`}
                      className="flex gap-4 w-full h-full"
                    >
                      <div className="relative w-32">
                        <Image
                          src={subaccount.subAccountLogo}
                          alt="subaccount logo"
                          fill
                          className="rounded-md object-contain bg-muted/50 p-4"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                          {subaccount.name}
                          <span className="text-muted-foreground text-xs">{subaccount.address}</span>
                        </div>
                      </div>
                    </Link>
                    <AlertDialogTrigger asChild>
                      <Button
                        size={"sm"}
                        variant={"destructive"}
                        className="w-20 hover:bg-red-600 hover:text-white !text-white"
                      >
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-left">Are your absolutely sure</AlertDialogTitle>
                        <AlertDescription className="text-left">This action cannot be undon. This will delete the subaccount and all data related to the subaccount.</AlertDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="flex items-center">
                        <AlertDialogCancel className="mb-2">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive hover:bg-destructive">
                          {/* <DeleteButton subaccountId={subaccount.id} /> */}
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </CommandItem>
                ))
              ) : (
                <div className="text-muted-foreground text-center p-4">No Sub accounts</div>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </AlertDialog>
  );
};

export default page;
