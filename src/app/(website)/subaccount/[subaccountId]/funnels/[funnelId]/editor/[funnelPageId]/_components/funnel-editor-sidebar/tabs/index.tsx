import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings } from "@/icons";
import { Funnel } from "@/icons/funnel";
import { Layers } from "@/icons/layers";
import { Plus } from "@/icons/plus";
import clsx from "clsx";

type Props = {
  className: string;
};

const TabList = (props: Props) => {
  return (
      <TabsList
        className={clsx("flex rounded-none border-r-[1px] border-b-[1px] border-main-az items-center justify-between w-[240px] bg-[#151515] px-2 py-2 h-fit gap-4 absolute top-[41px] left-[0px]", props.className)}
      >
        <TabsTrigger
          value="Components"
          className=" h-6 px-2 data-[state=active]:bg-main-black   data-[state=active] data-[state=active]:rounded"
        >
          Element
        </TabsTrigger>

        <TabsTrigger
          value="Layers"
          className="h-6 px-2 data-[state=active]:bg-main-black   data-[state=active] data-[state=active]:rounded"
        >
          Layers
        </TabsTrigger>
        <TabsTrigger
          value="Media"
          className="h-6 px-2 data-[state=active]:bg-main-black   data-[state=active] data-[state=active]:rounded"
        >
          Storage
        </TabsTrigger>
      </TabsList>
  );
};

export default TabList;
