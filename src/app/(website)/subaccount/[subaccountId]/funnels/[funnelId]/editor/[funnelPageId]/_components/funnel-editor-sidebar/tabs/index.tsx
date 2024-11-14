import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings } from '@/icons'
import { Funnel } from '@/icons/funnel'
import { Layers } from '@/icons/layers'
import { Plus } from '@/icons/plus'

type Props = {}

const TabList = (props: Props) => {
  return (
    <TabsList className=" flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4">
      <TabsTrigger
        value="Settings"
        className="w-7 h-7 p-0 data-[state=active]:border-2  data-[state=active]:border-main data-[state=active]:rounded"
      >
        <Settings />
      </TabsTrigger>
      <TabsTrigger
        value="Components"
        className="w-7 h-7 p-0 data-[state=active]:border-2  data-[state=active]:border-main data-[state=active]:rounded"
      >
        <Plus />
      </TabsTrigger>

      <TabsTrigger
        value="Layers"
        className="w-7 h-7 p-0 data-[state=active]:border-2  data-[state=active]:border-main data-[state=active]:rounded"
      >
        < Layers/>
      </TabsTrigger>
      <TabsTrigger
        value="Media"
        className="w-7 h-7 p-0 data-[state=active]:border-2  data-[state=active]:border-main data-[state=active]:rounded"
      >
        < Funnel/>
      </TabsTrigger>
    </TabsList>
  )
}

export default TabList
