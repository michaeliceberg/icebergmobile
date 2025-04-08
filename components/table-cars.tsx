import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { AddWork } from "./add-work"
import { works } from "@/db/schema"
import { LookWorks } from "./look-works"
 

type Props = {
    carsObject: {
        id: number,
        carNum: string,
        driver: string | null,
        type: string,
        odometer: string,
        next_to: string,
        model: string,
    }[],
    dbWorks: typeof works.$inferInsert[],
}



export const ReplaceBid = (Bid: string) => {
    return Bid
    .replace('покупателя','')
    .replace('айс0000','')
}

export const ReplaceDate = (someDate: string) => {
    const splitted = someDate.split(" ")
    
    const splittedTime = splitted[1].split(":")

    const rearrange = splittedTime[0] + ":" + splittedTime[1] + " " +splitted[0]
    
    return rearrange
    .replace('.12.2024','дек')
    .replace('.01.2025','янв')
    .replace('.02.2025','фев')
    .replace('.03.2025','мар')
    .replace('.04.2025','апр')
    .replace('.05.2025','май')
    .replace('.06.2025','июн')
    .replace('.07.2025','июл')
}
    
export const TableCars = ({
    carsObject,
    dbWorks,
}: Props) => {


    return(
        <div className="pt-5">


            <Table>
                <TableCaption>Список машин.</TableCaption>
                <TableHeader>
                    <TableRow>
                    {/* <TableHead className="w-[10px]">№</TableHead> */}
                        <TableHead>№ машины</TableHead>
                        <TableHead>Работы</TableHead>
                        <TableHead>Одометр</TableHead>
                        {/* <TableHead>ТО пред</TableHead> */}
                        <TableHead className="text-right">ТО след</TableHead>
                    </TableRow>
                </TableHeader>


                <TableBody>

                   


                    {carsObject.map((el, index) => (
                        <TableRow key={index}>

                            <TableCell className="font-medium">

                                <AddWork 
                                    // next_to={el.next_to} 
                                    carNum={el.carNum} 
                                    odometer={el.odometer} 
                                    carId={el.id} 
                                    type={el.type}
                                    model={el.model}
                                />
                            
                            </TableCell>


                            <TableCell className="font-medium">
                                <LookWorks 
                                    works={dbWorks.filter(work => work.carId == el.id)}  
                                    carNum={el.carNum}  
                                    type={el.type}
                                    next_to= {el.next_to}
                                />
                            </TableCell>
                            
                            <TableCell>
                                {el.odometer}
                            </TableCell>
             
                            <TableCell className="text-right pt-12">
                                <p>
                                    {dbWorks.filter(work => work.carId == el.id)[0]?.nextTO || "ТО не было"} 
                                </p>


                                {/* смотрим, NextTO нашли в списке Works?
                                    Если нет - то красным КРЕСТИК
                                    Если нашли - смотрим разницу ТО и одометр 
                                    если < 5000 то Красным Иначе - зеленым
                                */}

                                {Number(dbWorks.filter(work => work.carId == el.id)[0]?.nextTO) 
                                ? 
                                <div>

                                    {Number(dbWorks.filter(work => work.carId == el.id)[0]?.nextTO)  - +el.odometer < 5000 
                                    
                                    ?                                     
                                    <p className="text-xs bg-red-200 p-2 rounded-sm w-[50px]">
                                        {Number(dbWorks.filter(work => work.carId == el.id)[0]?.nextTO)  - +el.odometer} 
                                    </p>
                                
                                    : 
                                    <p className="text-xs bg-green-200 p-2 rounded-sm w-[50px]">
                                        {Number(dbWorks.filter(work => work.carId == el.id)[0]?.nextTO)  - +el.odometer} 
                                    </p>
                                    } 
                                </div>

                                : 
                                <div className="text-right justify-end text-red-500 content-end">
                                    {/* <p className="text-xs bg-red-200 p-2 rounded-sm w-[50px]"> */}
                                    {/* <Ban className='h-4 w-4 text-red-500 '/>  */}
                                    {/* X */}
                                    {/* </p> */}
                                </div>

                                }
                               


                            </TableCell>



                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </div>
    )
}