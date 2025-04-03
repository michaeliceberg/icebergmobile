import { uploadExpensesBid } from "@/actions/insert-espenses-bid"
import { updateExpensesBid } from "@/actions/update-expenses-bid"
import { getBetonData } from "@/app/_lib/readSheet"
import { FeedWrapper } from "@/components/feed-wrapper"
import { HeaderWTU } from "@/components/header-with-time-update"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { TableBeton } from "@/components/table-beton"
import { ReplaceBeton } from "@/components/table-weights"
import { UpdateButton } from "@/components/update-button"

import { UserProgress } from "@/components/user-progress"
// import { constBeton } from "@/constBeton"
import { getExpensesBid, getRecipe } from "@/db/queries"
// import { redirect } from "next/navigation"
// import { redirect } from "next/navigation"


 const BetonPage = async () => {

  
// let beton = constBeton

let beton = await getBetonData()


if (!beton) {
    throw new Error('Нет бетона!');
}



// console.log(beton.slice(0, 4))




// ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ
const dateTimeUpdate:string = beton.slice(0, 4)[3][0].split(/(\s+)/)

// const timeHourMinute = dateTimeUpdate.split(":");


// const dateUpd = dateTimeUpdate [0]

// det Hours Minutes
//
// const timeUpd = dateTimeUpdate[2].slice(0, -3)


const dateUpd = dateTimeUpdate[4]
const timeUpd = dateTimeUpdate[2]

    



// if (!beton) {
//     redirect('/');
// }



// const betonSliсe = beton.slice(5,200).filter(el=>el[0] != '')
// beton = betonSliсe

beton = beton.slice(5,20).filter(el=>el[0] != '')
// beton = betonSliсe

// console.log(beton)



// TODO:
//
const recipeData = await getRecipe()
const expensesBid = await getExpensesBid()



// 1 // Если есть кого обновить, обновляем (ОБНОВЛЯЕМ ПО МАССЕ)   (сравниваем Бетон из Гугла с бетоном из Expenses по Заявке)
//
const betonToUpdate = beton.filter(bet_el => {

    const foundBidNewMassDone = expensesBid.filter(exp_el => {

        //если заказ уже есть в expences, смотрим МАССУ
        //
        return (exp_el.zakaz == bet_el[9] && + exp_el.massDone != +bet_el[1])
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
            
            // добавляем Рецепт из Recipe   Проверяем есть ли Base и Suffix в Google Stamp   (если нет запишем '')
            //

            // details: recipeData.filter(rec => 
            //     ReplaceBeton(rec.stamp) == ReplaceBeton(el[7])).length > 0 
            //     ? String(recipeData.filter(rec => 
            //         ReplaceBeton(rec.stamp) == ReplaceBeton(el[7]))[0].details)
            //     : '',



            details: recipeData.filter(rec => 

                ReplaceBeton(el[7]).toLowerCase().includes(rec.stampBase.toLocaleLowerCase())                
                
                ).length > 0   // Отфильтровали ХОТЯ бы один рецепт

                ? String(recipeData.filter(rec => 

                    ReplaceBeton(el[7]).toLowerCase().includes(rec.stampBase.toLocaleLowerCase())

                )[0].details)
                
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

        isModified: zakazNaidenVExpenses.length == 0 ? '' : zakazNaidenVExpenses[0].isModified,
        contrag: bet_el[4],
        zavod: bet_el[5],

        numCars: bet_el[6],
        listCars: bet_el[8],
        zakaz: bet_el[9]
    })

})





// console.log(betonToUpdateObject)











return(
    <div className="flex flex-row-reverse gap-[48px]">
        <StickyWrapper>
            <UserProgress />
        </StickyWrapper>
 
        <FeedWrapper>
            <HeaderWTU title='Бетон' dateUpd={dateUpd} timeUpd={timeUpd} />

            <TableBeton betonWithDetailsToRender={betonWithDetailsToRender} recipeData={recipeData}/>


            <UpdateButton  betonToUpdateObject = {betonToUpdateObject}  betonToAddObject = {betonToAddObject}/>
        </FeedWrapper>
    </div>
    )
 }

 export default BetonPage