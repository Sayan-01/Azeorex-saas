import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings } from "@/icons";
import { Ai } from "@/icons/ai";
import { Command } from "@/icons/command";
import { File } from "@/icons/file";
import { Funnel } from "@/icons/funnel";
import { Layers } from "@/icons/layers";
import { Layout } from "@/icons/layout";
import { Plus } from "@/icons/plus";
import { Plus2 } from "@/icons/plus2";
import { Stack } from "@/icons/stack";
import clsx from "clsx";

type Props = {
  className: string;
};

const TabList = (props: Props) => {
  return (
    <TabsList className={clsx("flex rounded-none border-main-az items-center  bg-transparent px-2 py-2.5 h-fit gap-3 absolute top-[0px] left-[55px] transition-all", props.className)}>
      <TabsTrigger
        value="Components"
        className="h-7 pl-[6px] pr-1.5 text-sm data-[state=active]:bg-zinc-700 data-[state=active]:opacity-90 data-[state=active]:mx-1 opacity-40 text-white gap-1 data-[state=active]:rounded-md"
      >
        <Plus2 /> Insert
      </TabsTrigger>

      <TabsTrigger
        value="Layers"
        className="h-7 pl-[6px] pr-1.5 text-sm data-[state=active]:bg-zinc-700 data-[state=active]:opacity-90 data-[state=active]:mx-1 opacity-40 text-white gap-1 data-[state=active]:rounded-md"
      >
        <Stack /> Layers
      </TabsTrigger>
      <TabsTrigger
        value="Media"
        className="h-7 pl-[6px] pr-1.5 text-sm data-[state=active]:bg-zinc-700 data-[state=active]:opacity-90 data-[state=active]:mx-1 opacity-40 text-white gap-1 data-[state=active]:rounded-md"
      >
        <File /> Storage
      </TabsTrigger>
      <TabsTrigger
        value="Layout"
        className="h-7 pl-[6px] pr-1.5 text-sm data-[state=active]:bg-zinc-700 data-[state=active]:opacity-90 data-[state=active]:mx-1 opacity-40 text-white gap-1 data-[state=active]:rounded-md"
      >
        <Layout /> Layout
      </TabsTrigger>
      <TabsTrigger
        value="CMS"
        className="h-7 pl-[6px] pr-1.5 text-sm data-[state=active]:bg-zinc-700 data-[state=active]:opacity-90 data-[state=active]:mx-1 opacity-40 text-white gap-1 data-[state=active]:rounded-md"
      >
        <Ai /> CMS
      </TabsTrigger>
    </TabsList>
  );
};

export default TabList;
