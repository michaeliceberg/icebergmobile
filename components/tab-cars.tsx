import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TableCars } from "./table-cars"
import { Siren } from "lucide-react"
import { works } from "@/db/schema"



type Props = {
    FourTypes: {
        id: number,
        carNum: string,
        driver: string | null,
        type: string,
        odometer: string,
        to_prev: string,
        next_to: string,  
        model: string,
    
    }[][],
    dbWorks: typeof works.$inferInsert[],
}



export function TabCars({
    FourTypes,
    dbWorks,
}: Props) {
  return (
    <Tabs defaultValue="all" className="pt-5">
      <TabsList className="w-full flex justify-between">
        <TabsTrigger value="all">Все</TabsTrigger>
        <TabsTrigger value="sam">Самосвалы</TabsTrigger>
        <TabsTrigger value="ton">Тоннары</TabsTrigger>
        <TabsTrigger value="mix">Миксера</TabsTrigger>
        <TabsTrigger value="err">
          {FourTypes[3].length > 0 
          ? <Siren  className='h-6 w-6 text-red-500 animate-bounce'/>
          : <Siren  className='h-4 w-4 text-gray-500'/>
          }  
          
        </TabsTrigger>
      </TabsList>
    
        <TabsContent value="all">
             <TableCars carsObject={FourTypes[0]} dbWorks={dbWorks}/>
        </TabsContent>

        <TabsContent value="sam">
            <TableCars carsObject={FourTypes[1]} dbWorks={dbWorks}/>
        </TabsContent>
        
        <TabsContent value="ton">
            <TableCars carsObject={FourTypes[2]} dbWorks={dbWorks}/>
        </TabsContent>

        <TabsContent value="mix">
            <TableCars carsObject={FourTypes[3]} dbWorks={dbWorks}/>
        </TabsContent>

        <TabsContent value="err">
            <TableCars carsObject={FourTypes[4]} dbWorks={dbWorks}/>
        </TabsContent>

    </Tabs>
  )
}
