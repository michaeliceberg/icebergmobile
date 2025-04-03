import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
// import { incOut } from "@/db/schema"
  

type Props = {
// weights: typeof incOut.$inferSelect[]
weights: string[][]
}

//   activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;


// растворкладочныйцементныйм100пк3f50стяжка

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

export const ReplaceBeton = (beton: string) => {
    return beton.replace(/ /g,'')
                .toLowerCase()
                .replace('бст','')
                .replace('покп№115','')
                .replace('с/д','')
                .replace('с/в','')
                // .replace('награвии','грав')
                // .replace('награвии','грав')
                .replace('награвии','')
                // .replace('награвии','')
                .replace('награните','гран')
                .replace('фр.','')          
                .replace('растворкладочныйцементныйм','')    
                .replace('намодификаторетипамб','модмб')    
                
                
}

    
export const TableWeights = ({
    weights
}: Props) => {

    

    


    return(
        <div>
            <Table>
                <TableCaption>Выпуск бетона</TableCaption>
                <TableHeader>
                    <TableRow>
                    {/* <TableHead className="w-[100px]">Время</TableHead> */}
                    <TableHead>Время</TableHead>
                        <TableHead>Материал</TableHead>
                        <TableHead>т/м³</TableHead>
                        <TableHead>Контраг</TableHead>
                        <TableHead>З</TableHead>
                        {/* <TableHead>Авто №</TableHead> */}
                        {/* <TableHead className="text-right">Авто №</TableHead> */}
                    </TableRow>
                </TableHeader>

{/* 
                {ResultLeaderTable.map((cur_user_stat, index) => (
                    <>
                        <li key={index}> */}


{/* bg-orange-400 */}

                <TableBody>
                    {weights.map((el, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{ReplaceDate(el[0])}</TableCell>
                            <TableCell className=
                                {el[6] == 'Приход'
                                    ? "w-full font-bold flex items-center justify-between"
                                    : el[6] == 'Инертные'
                                    ? "w-full rounded-xl  bg-fuchsia-500 font-bold text-white mt-2 flex items-center justify-between"
                                    : el[6] == 'Бетон'
                                    ? "w-full rounded-xl  bg-orange-400 font-bold text-white mt-2 flex items-center justify-between"
                                    : "w-full rounded-xl  bg-neutral-700 font-bold text-white mt-2 flex items-center justify-between"
                                }
                            >{ReplaceBeton(el[1])}</TableCell>
                            <TableCell>{el[2]}</TableCell>
                            <TableCell>{el[3].slice(0,5)}</TableCell>
                            <TableCell className=
                                                            {el[4] == 'Щ'
                                                            ? "w-full rounded-xl  bg-green-500 text-white flex items-center mt-2 justify-between"
                                                            : el[4] == 'П'
                                                            ? "w-full rounded-xl  bg-blue-500 text-white mt-2 flex items-center justify-between"
                                                            : "w-full rounded-xl  bg-red-500 text-white mt-2 flex items-center justify-between"
                                                        }
                            
                            
                            >{el[4]}</TableCell>
                            {/* <TableCell>{el[5]}</TableCell> */}
                            {/* <TableCell className="text-right">{el[5]}</TableCell> */}
                            {/* <TableCell className="text-right">{el[5].slice(0,5)}</TableCell> */}

                            
                        </TableRow>
                    ))}
                    
                </TableBody>
                </Table>
        </div>
    )
}