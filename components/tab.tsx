import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TableCars } from "./table-cars"



type Props = {
    FourTypes: {
        id: number,
        carNum: string,
        driver: string,
        type: string,
        odometer: string,
    }[][]
}



export function TabCars({
    FourTypes
}: Props) {
  return (
    <Tabs defaultValue="all" className="pt-5">
      {/* <TabsList className="grid w-full grid-cols-4"> */}
      <TabsList className="w-full flex justify-between">
        <TabsTrigger value="all">Все</TabsTrigger>
        <TabsTrigger value="sam">Самосвалы</TabsTrigger>
        <TabsTrigger value="ton">Тоннары</TabsTrigger>
        <TabsTrigger value="mix">Миксера</TabsTrigger>
      </TabsList>
    
        <TabsContent value="all">
             <TableCars carsObject={FourTypes[0]} />
        </TabsContent>

        <TabsContent value="sam">
            <TableCars carsObject={FourTypes[1]} />
        </TabsContent>
        
        <TabsContent value="ton">
            <TableCars carsObject={FourTypes[2]} />
        </TabsContent>

        <TabsContent value="mix">
            <TableCars carsObject={FourTypes[3]} />
        </TabsContent>

    </Tabs>
  )
}
