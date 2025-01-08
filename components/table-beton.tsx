// 'use client'

import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { ReplaceBeton, ReplaceDate } from "./table-weights"
import { RecipeDialog } from "./dialog-recipe"
import { getExpensesBid, getRecipe } from "@/db/queries"
import { updateExpensesBid } from "@/actions/update-expenses-bid"
import { uploadExpensesBid } from "@/actions/insert-espenses-bid"
  

  type Props = {
    city: string
    beton: string[][]
  }



export const TableBeton = async ({
    beton
}: Props) => {

    // const [pending, startTransition] = useTransition()

    const recipeData = await getRecipe()
    const expensesBid = await getExpensesBid()





    // 1 // Если есть кого обновить, обновляем (ОБНОВЛЯЕМ ПО МАССЕ)
    //
    const betonToUpdate = beton.filter(bet_el => {

        const foundBidNewMassDone = expensesBid.filter(exp_el => {

            //если заказ уже есть в expences, смотрим МАССУ
            //
            return (exp_el.zakaz == bet_el[9] && +exp_el.massDone != +bet_el[1])
        })

        if (foundBidNewMassDone.length > 0) {
            return bet_el[9] == foundBidNewMassDone[0].zakaz
        }
    })

    const betonToUpdateObject = betonToUpdate.map(el => {
        return (
            {
                id: 1000,
                date: el[0],
                betonAsphalt: 'beton',
                stamp: el[7],
                massDone: el[1],
                massTodo: el[3],
                details: '',
                isModified: '0',
                contrag: el[4],
                zavod: el[5],
                zakaz: el[9]

            }
        )
    })
    // ОБНОВЛЯЕМ ТОЛЬКО MASS DONE,   details не обновляем
    //
    if (betonToUpdateObject.length > 0) {
        await updateExpensesBid(betonToUpdateObject)
    }




    // 2 // Если есть новые, (не нашли совпадение заказа Beton с Expenses) 
    // добаляем к ним рецепт из Recipe (если есть или '') и добавляем в Expenses
    //
    const betonToAdd = beton.filter(bet_el => {

        const foundNewBid = expensesBid.filter(exp_el => {
            return exp_el.zakaz == bet_el[9]
        })

        if (foundNewBid.length == 0) {
            //
            // такого заказа НЕ нашли в БД expensesBid, поэтому его возвращаем
            //
            return bet_el
    }})







    const betonToAddObject = betonToAdd.map(el => {
        return (
            {
                id: 1000,
                date: el[0],
                betonAsphalt: 'beton',
                stamp: el[7],
                massDone: el[1],
                massTodo: el[3],
                
                // добавляем Рецепт из Recipe (если есть или '')
                //
                details: recipeData.filter(rec => 
                    ReplaceBeton(rec.stamp) == ReplaceBeton(el[7])).length > 0 
                    ? String(recipeData.filter(rec => 
                        ReplaceBeton(rec.stamp) == ReplaceBeton(el[7]))[0].details)
                    : '',

                isModified: '0',
                contrag: el[4],
                zavod: el[5],
                zakaz: el[9]

            }
        )
    })

    if (betonToAddObject.length > 0) {
        await uploadExpensesBid(betonToAddObject)
    }



    
    // startTransition(()=> {
    //     upsertBeton()
    // })



    // const detailsShowList = (details: string) => {
    //     const objDet = JSON.parse(details)
    //     const values = Object.values(objDet)
    //     const keys = Object.keys(objDet)

    //     return keys.map((key, index) => {
    //         return (
    //             {
    //                 material: key,
    //                 toShow: {
    //                     material: key,
    //                     mass: values[index]
    //                 }                    
    //             }
    //         )
    //     })
    // }



    const detailsShowList = (details: string) => {
        const objDet = JSON.parse(details)
        const values: string[] = Object.values(objDet)
        const keys = Object.keys(objDet)

        return keys.map((key, index) => {
            return (
                {
                    material: key,
                    mass: +values[index]
                    // mass: values
                     
                }
            )
        })
    }




    

    // 3 // Отображаем то что идет из гугла, 
    // добавляем рецепт из базы expenses, проверяя по bid

    // Если нет, добавляем рецепт из рецептов 0   (db recipe) ?? TODO: этого еще не сделал

    const betonWithDetailsToRender = beton.map(bet_el => {

        // Ищем заказ Гугла в Expenses. И смотрим, есть ли в Expenses Details для этого заказа
        //
        const zakazNaidenVExpenses = expensesBid.filter (exp_el => (exp_el.zakaz == bet_el[9] && exp_el.details != ''))
        
        return (
        {
            id: 1000,
            date: bet_el[0],
            betonAsphalt: 'beton',
            stamp: bet_el[7],
            massDone: bet_el[1],
            massTodo: bet_el[3],

            details: zakazNaidenVExpenses.length == 0 ? '' : detailsShowList(zakazNaidenVExpenses[0].details),

            isModified: '0',
            contrag: bet_el[4],
            zavod: bet_el[5],

            numCars: bet_el[6],
            listCars: bet_el[8],
            zakaz: bet_el[9]
        })

    })


    // console.log('---------------1-------------------')
    // console.log(betonWithDetailsToRender[0].details)
    

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
                                    <TableCell className="bg-green-200 align-middle rounded-xl flex text-center justify-center">{el?.massDone + "/" + el?.massTodo}</TableCell>

                                    


                                    <TableCell>{el?.contrag}</TableCell>
                                    <TableCell>{el?.zavod}</TableCell>
                                    <TableCell>{el?.numCars}</TableCell>


                                    {/* Кнопка РЕЦЕПТА  TODO:*/}

                                    <TableCell>
                                        <RecipeDialog 
                                            
                                            stampFromBetonToRender = {ReplaceBeton(el?.stamp || '')} 


                                            contrag = {el?.contrag || ''}
                                            done = {el?.massDone + "/" + el?.massTodo}
                                            // recipeData = {recipeData}
                                            recipeDetails = {el?.details}

                                            bid = {el.zakaz}
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