import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
// import { getDailyIncomeData } from "../../_lib/readSheet"
// import { TableInOut } from "@/components/table-inout"
import { TableIncome } from "@/components/table-income"
import { getDailyIncomeData } from "../_lib/readSheet"
import { HeaderWTU } from "@/components/header-with-time-update"
// import { useRecipeModal } from "../store/use-exit-modal"


 const IncomePage = async () => {



    




    const dailyIncome = await getDailyIncomeData()

    if (!dailyIncome) {
		throw new Error('Нет прихода!');
	}





    // ПОСЛЕДНЕЕ ОБНОВАЛЕНИЕ
    const dateTimeUpdate:string = dailyIncome[0][5].split(/(\s+)/);

    // const timeHourMinute = dateTimeUpdate.split(":");


    const dateUpd = dateTimeUpdate [0]

    // det Hours Minutes
    //
    const timeUpd = dateTimeUpdate [2].slice(0, -3)



    window.navigator.vibrate(200)

    
    //Look Щ П М
    //
    const skolkoShelkovo = dailyIncome.filter(el => el[3] == 'Щёлково')[0][1]
    const indexShelkovo = dailyIncome.findIndex( x => x[3] === 'Щёлково' );

    const skolkoPosad = dailyIncome.filter(el => el[3] == 'Посад')[0][1]
    const indexPosad = dailyIncome.findIndex( x => x[3] === 'Посад' );

    const skolkoMoskva = dailyIncome.filter(el => el[3] == 'Москва')[0][1]
    const indexMoskva = dailyIncome.findIndex( x => x[3] === 'Москва' );
    

    // console.log(skolkoShelkovo)
    // console.log(indexShelkovo)


    const dailyIncomeShelkovo = dailyIncome.slice(indexShelkovo+2,indexShelkovo+2+ +skolkoShelkovo)
    const dailyIncomePosad = dailyIncome.slice(indexPosad+2,indexPosad+2+ +skolkoPosad)
    const dailyIncomeMoskva = dailyIncome.slice(indexMoskva+2,indexMoskva+2+ +skolkoMoskva)

    // console.log(dailyIncomeShelkovo)


    // const data = await getIncOut()

   

    // console.log(data)

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
           
           
           
           <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <HeaderWTU title='Приход Материала' dateUpd={dateUpd} timeUpd={timeUpd} />

                {+skolkoShelkovo > 0 && 
                    <TableIncome сity={'Щёлково'} dailyIncome={dailyIncomeShelkovo} />
                }

                {+skolkoPosad > 0 && 
                    <TableIncome сity={'Посад'} dailyIncome={dailyIncomePosad} />
                }

                {+skolkoMoskva > 0 && 
                    <TableIncome сity={'Москва'} dailyIncome={dailyIncomeMoskva} />
                }
                
            </FeedWrapper>




            
        </div>
    )
 }

 export default IncomePage