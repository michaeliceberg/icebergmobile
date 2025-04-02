'use client'


import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { revalidatePath } from "next/cache"
// import { ReplaceDate } from "./table-weights"
// import { incOut } from "@/db/schema"
  

  type Props = {
    сity: string
    // data: typeof incOut.$inferSelect[]
    dailyIncome: string[][]
  }


  
//   activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;


  export const TableIncome = ({
    сity, dailyIncome
}: Props) => {




    // revalidatePath('/')
	// revalidatePath('/asphalt')
	// revalidatePath('/beton')
	// revalidatePath('/income')
	// revalidatePath('/expenses')
	// revalidatePath('/weights')



    return(
        // flex justify-center w-full 
        <div>
            <h1 
            
                className= {
                    сity == 'Щёлково' 
                    ? "w-full rounded-xl  bg-green-500 p-5 text-white flex items-center justify-between" 
                    : сity == 'Посад' 
                    ? "w-full rounded-xl  bg-blue-500 p-5 text-white flex items-center justify-between"
                    : "w-full rounded-xl  bg-rose-500 p-5 text-white flex items-center justify-between"
                } 
                
                >
                {сity}
            </h1>
            {/* <div className="w-full bg-white pb-3 flex items-center justify-between border-b-2 mb-5 font-bold lg:z-50"> */}

            <div>


            <div className="pb-20">


                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Время</TableHead>
                            <TableHead>Тонн</TableHead>
                            <TableHead>Материал</TableHead>
                            <TableHead>🚚</TableHead>
                            <TableHead className="text-right">Контраг</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {dailyIncome.map((el, index) => (
                            <TableRow key={index}>
                                {/* <TableCell className="font-medium">{ReplaceDate(el[0])}</TableCell> */}
                                <TableCell className="font-medium">{el[0]}</TableCell>
                                <TableCell>{el[1]}</TableCell>
                                <TableCell>{el[3]}</TableCell>
                                <TableCell>{el[4]}</TableCell>
                                <TableCell className="text-right">{el[5].slice(0,7)}</TableCell>
                            </TableRow>
                        ))}
                        
                    </TableBody>
                    </Table>
            </div>
            </div>
        </div>
    )
  }