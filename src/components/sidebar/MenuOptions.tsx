import { Document, Types } from "mongoose";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import clsx from "clsx";

type Props = {
  defaultOption?: boolean;
  subAccounts: any;
  sideBarOpt: any;
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
};

function MenuOptions({ defaultOption, subAccounts, sideBarOpt, sidebarLogo, details, user, id }: Props) {
  return (
    <Sheet model={flase}>
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
        className={clsx(" bg-background/80 backdrop-blur-xl fixed borde-r-[1px] p-6", { "hidden md:inline-block z-0 w-[300px]": defaultOpen, "inline-block md:hidden z-[100] w-full": !defaultOpen })}
      >
        <div>
          <Aspect
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuOptions;
