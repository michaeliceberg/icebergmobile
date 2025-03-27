import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { ReplaceBeton, ReplaceDate } from "./table-weights"
  

  type Props = {
    betonWithDetailsToRender: {
        id: number;
        date: string;
        betonAsphalt: string;
        stamp: string;
        massDone: string;
        massTodo: string;
        details: string | {
            material: string;
            mass: number;
        }[];
        isModified: string;
        contrag: string;
        zavod: string;
        numCars: string;
        listCars: string;
        zakaz: string;
    }[],


    recipeData: {  date: Date;
        id: number;
        stampBase: string;
        stampSuffix: string;
        details: string;
        betonAsphalt: string;
        zavod: string;
    }[]
    
    
    
    
  }




export const TableBeton = async ({
    betonWithDetailsToRender,
    
}: Props) => {


    return(
        <div>
            <div>
                <div>
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Время</TableHead>
                                <TableHead>Вып/Из</TableHead>
                                {/* <TableHead className="text-left p-0.5">Из</TableHead> */}
                                <TableHead>Контраг</TableHead>
                                <TableHead>З</TableHead>
                                <TableHead>🚚</TableHead>
                                <TableHead className="text-right">Марка</TableHead>
                                {/* <TableHead>Рецепт</TableHead> */}
                                {/* <TableHead className="text-right">Авто №</TableHead> */}
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {betonWithDetailsToRender.map((el, index) => (

                                <TableRow key={index}>
                                    <TableCell className="font-medium">{ReplaceDate(el?.date || '')}</TableCell>
                                    
                                    
                                    {/* <TableCell className="text-right pr-0.5  bg-green-200 rounded-l-xl">{el?.massDone + "/"}</TableCell>
                                    <TableCell className=
                                        "text-right pl-0  bg-green-200 rounded-r-xl"
                                    >{el?.massTodo}</TableCell>
                                     */}
                                    
                                    {/* <TableCell className="mx-auto flex content-center justify-center bg-green-200 rounded-xl">{el?.massDone + "/" + el?.massTodo}</TableCell> */}
                                    {/* <TableCell className="text-center flex-row flex  items-center content-center justify-center bg-green-200 rounded-xl">{el?.massDone + "/" + el?.massTodo}</TableCell> */}
                                    {/* <TableCell className="bg-green-200 align-middle rounded-xl flex text-center justify-center">{el?.massDone + "/" + el?.massTodo}</TableCell> */}
                                    <TableCell className="bg-green-200 rounded-xl font-bold align-middle content-center m-auto text-center justify-center">{el?.massDone + "/" + el?.massTodo}</TableCell>

                                    


                                    <TableCell>{el?.contrag.slice(0,5)}</TableCell>
                                    <TableCell>{el?.zavod}</TableCell>
                                    <TableCell>{el?.numCars}</TableCell>


                                    {/* Кнопка РЕЦЕПТА  TODO:*/}

                                    <TableCell>
                                        {ReplaceBeton(el?.stamp || '').slice(0,5)} 
                                    </TableCell>
                                    {/* <TableCell>

                                        <RecipeDialog 
                                            stampFromBetonToRender = {ReplaceBeton(el?.stamp || '')} 
                                            stampRow = {el?.stamp || ''}
                                            contrag = {el?.contrag || ''}
                                            done = {el?.massDone + "/" + el?.massTodo}
                                            recipeData = {recipeData}
                                            recipeDetails = {el?.details}
                                            bid = {el.zakaz}
                                            isModified = {el.isModified}
                                        />

                                    </TableCell> */}

                                    

                                    {/* <TableCell className="text-right">{el?.listCars.slice(0, 45)}</TableCell> */}
                                </TableRow>
                            ))}
                            
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
  }