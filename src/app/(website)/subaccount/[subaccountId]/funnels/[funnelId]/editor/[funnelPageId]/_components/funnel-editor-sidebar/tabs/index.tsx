import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings } from '@/icons'
import { Funnel } from '@/icons/funnel'
import { Layers } from '@/icons/layers'
import { Plus } from '@/icons/plus'
import clsx from 'clsx'

type Props = {
  className: string
}

const TabList = (props: Props) => {
  return (
    <TabsList draggable className={clsx("flex items-center z-[2000] justify-evenly w-fit bg-zinc-900 px-2 py-2 element h-fit gap-4 absolute bottom-6 right-[272px]", props.className)} >
      <TabsTrigger
        value="Settings"
        className="w-10 h-8 p-0 data-[state=active]:bg-zinc-950  data-[state=active] data-[state=active]:rounded"
      >
        <Settings />
      </TabsTrigger>
      <TabsTrigger
        value="Components"
        className="w-10 h-8 p-0 data-[state=active]:bg-zinc-950  data-[state=active] data-[state=active]:rounded"
      >
        <Plus />
      </TabsTrigger>

      <TabsTrigger
        value="Layers"
        className="w-10 h-8 p-0 data-[state=active]:bg-zinc-950  data-[state=active] data-[state=active]:rounded"
      >
        < Layers/>
      </TabsTrigger>
      <TabsTrigger
        value="Media"
        className="w-10 h-8 p-0 data-[state=active]:bg-zinc-950  data-[state=active] data-[state=active]:rounded"
      >
        < Funnel/>
      </TabsTrigger>
    </TabsList>
  )
}

export default TabList
