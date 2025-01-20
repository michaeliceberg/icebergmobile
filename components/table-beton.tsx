import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { ReplaceBeton, ReplaceDate } from "./table-weights"
import { RecipeDialog } from "./dialog-recipe"
  

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
    recipeData
}: Props) => {


    return(
        <div>
            <div>
                <div className="pb-20">
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
                                <TableHead>Марка</TableHead>
                                <TableHead>Рецепт</TableHead>
                                <TableHead className="text-right">Авто №</TableHead>
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

                                    


                                    <TableCell>{el?.contrag}</TableCell>
                                    <TableCell>{el?.zavod}</TableCell>
                                    <TableCell>{el?.numCars}</TableCell>


                                    {/* Кнопка РЕЦЕПТА  TODO:*/}

                                    <TableCell>

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

                                    </TableCell>

                                    <TableCell>{
                                            el?.details instanceof Array 
                                            ? el?.details.map((elem, index) => 
                                                // (
                                                //     String(elem.toShow.mass) != '0' &&
                                                //     <p key={index*98191} 
                                                //         className=
                                                //         {elem.toShow.material == "гравий" ?
                                                //         "flex flex-1 text-foreground justify-between bg-gray-700 rounded-sm text-white pl-1 pr-1"
                                                //         : elem.toShow.material == "ПесокБет"
                                                //         ? "flex flex-1 text-foreground justify-between bg-orange-400 rounded-sm text-white pl-1 pr-1"
                                                //         : elem.toShow.material == "Зола"
                                                //         ? "flex flex-1 text-foreground justify-between bg-cyan-700 rounded-sm text-white pl-1 pr-1"
                                                //         : "flex flex-1 text-foreground justify-between"}
                                                //         >
                                                //             {elem.toShow.material.slice(0,3)+"-"}
                                                //             {String(elem.toShow.mass).split(".")[0]}
                                                //     </p>
                                                // )


                                                (
                                                    String(elem.mass) != '0' &&
                                                    <p key={index*98191} 
                                                        className=
                                                        {elem.material == "гравий" ?
                                                        "flex flex-1 text-foreground justify-between bg-gray-700 rounded-sm text-white pl-1 pr-1"
                                                        : elem.material == "песок_бет"
                                                        ? "flex flex-1 text-foreground justify-between bg-orange-400 rounded-sm text-white pl-1 pr-1"
                                                        : elem.material == "Зола"
                                                        ? "flex flex-1 text-foreground justify-between bg-cyan-700 rounded-sm text-white pl-1 pr-1"
                                                        : "flex flex-1 text-foreground justify-between"}
                                                        >
                                                            {elem.material.slice(0,3)+"-"}
                                                            {/* {String(elem.mass).split(".")[0]} */}
                                                            {elem.mass}
                                                    </p>
                                                )
                                            
                                            
                                            
                                            ) 
                                            : '⚠️ новый рецепт'
                                        }
                                    </TableCell>

                                    <TableCell className="text-right">{el?.listCars.slice(0, 45)}</TableCell>
                                </TableRow>
                            ))}
                            
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
  }