import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings } from '@/icons'
import { Funnel } from '@/icons/funnel'
import { Layers } from '@/icons/layers'
import { Plus } from '@/icons/plus'

type Props = {}

const TabList = (props: Props) => {
  return (
    <TabsList className=" flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4 ">
      <TabsTrigger
        value="Settings"
        className="w-10 h-10 p-0 data-[state=active]:border-2 data-[state=active]:bg-zinc-900 data-[state=active]:border-zinc-800 data-[state=active]:rounded-full"
      >
        <Settings />
      </TabsTrigger>
      <TabsTrigger
        value="Components"
        className="data-[state=active]:border-2 data-[state=active]:bg-zinc-900 data-[state=active]:border-zinc-800 data-[state=active]:rounded-full w-10 h-10 p-0"
      >
        <Plus />
      </TabsTrigger>

      <TabsTrigger
        value="Layers"
        className="w-10 h-10 p-0 data-[state=active]:border-2 data-[state=active]:bg-zinc-900 data-[state=active]:border-zinc-800 data-[state=active]:rounded-full"
      >
        < Layers/>
      </TabsTrigger>
      <TabsTrigger
        value="Media"
        className="w-10 h-10 p-0 data-[state=active]:border-2 data-[state=active]:bg-zinc-900 data-[state=active]:border-zinc-800 data-[state=active]:rounded-full"
      >
        < Funnel/>
      </TabsTrigger>
    </TabsList>
  )
}

export default TabList
