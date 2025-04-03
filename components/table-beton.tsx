import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { ReplaceBeton, ReplaceDate } from "./table-weights"
import Image from "next/image";
// import { RevalidateMeComp } from "./revalidateMeComp";
  

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

                                <TableHead>
                                    <Image src='/ice_concretecar_icon.svg' alt='beton' height={30} width={30} />
                                </TableHead>

                                <TableHead className="text-right">Марка</TableHead>
                                {/* <TableHead>Рецепт</TableHead> */}
                                {/* <TableHead className="text-right">Авто №</TableHead> */}
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {betonWithDetailsToRender.map((el, index) => (

                                <TableRow key={index}>
                                    <TableCell className="font-medium">{ReplaceDate(el?.date || '')}</TableCell>
                                    
                                    
                                    <TableCell className=
                                        { +el?.massDone / +el?.massTodo > 0.9
                                        ? "bg-green-300 rounded-xl font-bold align-middle content-center m-auto text-center justify-center"
                                        : "border-green-300 border-dashed border-2 rounded-xl font-bold align-middle content-center m-auto text-center justify-center"
                                        }
                                    >
                                        {el?.massDone + "/" + el?.massTodo}
                                    </TableCell>

                                    


                                    <TableCell>{el?.contrag.slice(0,5)}</TableCell>
                                    <TableCell
                                    className=
                                        {el?.zavod == 'Щ'
                                            ? "w-full rounded-xl  bg-green-500 text-white flex items-center mt-2 justify-between"
                                            : el?.zavod == 'П'
                                            ? "w-full rounded-xl  bg-blue-500 text-white mt-2 flex items-center justify-between"
                                            : "w-full rounded-xl  bg-red-500 text-white mt-2 flex items-center justify-between"
                                        }>
                                        {el?.zavod}</TableCell>
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
            {/* <RevalidateMeComp /> */}
        </div>
    )
  }