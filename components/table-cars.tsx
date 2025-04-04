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
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">№</TableHead>
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

                                <AddWork carNum={el.carNum}  odometer={el.odometer} carId={el.id} type={el.type}/>
                            
                            </TableCell>


                            <TableCell className="font-medium">
                                <LookWorks works={dbWorks.filter(work => work.carId == el.id)}  carNum={el.carNum}  type={el.type}/>

                            </TableCell>
                            {/* <TableCell 
                            className=
                                {el[6] == 'Приход'
                                    ? "w-full font-bold flex items-center justify-between"
                                    : el[6] == 'Инертные'
                                    ? "w-full rounded-xl  bg-fuchsia-500 font-bold text-white mt-2 flex items-center justify-between"
                                    : el[6] == 'Бетон'
                                    ? "w-full rounded-xl  bg-orange-400 font-bold text-white mt-2 flex items-center justify-between"
                                    : "w-full rounded-xl  bg-neutral-700 font-bold text-white mt-2 flex items-center justify-between"
                                }
                            >{el.carNum}</TableCell> */}
                            <TableCell>{el.odometer}</TableCell>
                            {/* <TableCell>0</TableCell> */}
                            {/* <TableCell className=
                                                            {el[4] == 'Щ'
                                                            ? "w-full flex items-center mt-2 justify-between"
                                                            : el[4] == 'П'
                                                            ? "w-full rounded-xl  bg-blue-500 text-white mt-2 flex items-center justify-between"
                                                            : "w-full rounded-xl  bg-red-500 text-white mt-2 flex items-center justify-between"
                                                        }
                            
                            
                            >{el[4]}</TableCell> */}
                            {/* <TableCell>{el[5]}</TableCell> */}
                            <TableCell className="text-right">489492</TableCell>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </div>
    )
}