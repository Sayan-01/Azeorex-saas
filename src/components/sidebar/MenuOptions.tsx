"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { AspectRatio } from "../ui/aspect-ratio";

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

const openState = useMemo(() => (defaultOption ? { open: true } : {}), [defaultOption]);


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
        className={clsx(" bg-background/80 backdrop-blur-xl fixed borde-r-[1px] p-6", { "hidden md:inline-block z-0 w-[300px]": defaultOption, "inline-block md:hidden z-[100] w-full": !defaultOption })}
      >
        <div>
          <AspectRatio></AspectRatio>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuOptions;
