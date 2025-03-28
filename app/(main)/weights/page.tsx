import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progress"
// import { getIncOut } from "@/db/queries"
import { TableWeights } from "@/components/table-weights"
import { getWeightsData } from "../../_lib/readSheet"
import { HeaderWTU } from "@/components/header-with-time-update"


 const WeightsPage = async () => {

    const weights = await getWeightsData()
    // console.log("weights: ", weights)

    // const weights = [
    //     [ 'Весы АЙСБЕРГ', '', '', '', '', '', '25.12.2024 12:30:28' ],
    //     [ 'Обновлено: ', '25.12.2024 12:30:27', '', '', '', '', '0' ],
    //     [ 'приход', '', '', '', '', '', '173' ],
    //     [ 'асфальт' ],
    //     [ 'бетон' ],
    //     [ 'Время', 'Материал', 'т/куб', 'Контраг', '', 'Машина' ],
    //     [
    //       '25.12.2024 12:24:30',
    //       'БСТ В25П4F200W8 ПО КП №115 НА ГРАВИИ С/Д',
    //       '9,00',
    //       'ББГ',
    //       'Щ',
    //       'е687ас790',
    //       'Бетон'
    //     ],
    //     [
    //       '25.12.2024 12:14:48',
    //       'ГАБ8-11,2',
    //       '36,40',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'в818вс790',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 12:11:44',
    //       'ГАБ8-11,2',
    //       '34,00',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'с238вн790',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 11:58:16',
    //       'БСТ В40П4F200W8 С/Д',
    //       '9,00',
    //       'АЗИМУТ ООО',
    //       'Щ',
    //       'с603хк190',
    //       'Бетон'
    //     ],
    //     [
    //       '25.12.2024 11:40:54',
    //       'БСТ В40П4F200W8 С/Д',
    //       '9,00',
    //       'АЗИМУТ ООО',
    //       'Щ',
    //       'р283ке750',
    //       'Бетон'
    //     ],
    //     [
    //       '25.12.2024 11:26:36',
    //       'ГАБ8-11,2',
    //       '36,80',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'в818вс790',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 11:23:35',
    //       'ГАБ8-11,2',
    //       '34,20',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'с238вн790',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 10:32:35',
    //       'ЦЕМ42,5',
    //       '35,10',
    //       'ЦЕМРОС Серебрянский ЦЗ',
    //       'Щ',
    //       'е198мс797',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 10:27:40',
    //       'ГАБ8-11,2',
    //       '36,30',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'в818вс790',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 10:24:59',
    //       'ГАБ8-11,2',
    //       '34,00',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'с238вн790',
    //       'Приход'
    //     ],
    //     [
    //       '25.12.2024 10:19:57',
    //       'БСТ В25П5F200W8 НА ГРАВИИ ФР.5-20 С/Д',
    //       '5,50',
    //       'Строительная Компания ООО',
    //       'Щ',
    //       'е687ас790',
    //       'Бетон'
    //     ],
    //     [
    //       '25.12.2024 10:10:14',
    //       'БСТ В40П4F200W8 С/Д',
    //       '11,00',
    //       'АЗИМУТ ООО',
    //       'Щ',
    //       'р280ке750',
    //       'Бетон'
    //     ],
    //     [
    //       '25.12.2024 9:58:50',
    //       'БСТ В40П4F200W8 С/Д',
    //       '11,00',
    //       'АЗИМУТ ООО',
    //       'Щ',
    //       'с603хк190',
    //       'Бетон'
    //     ],
    //     [
    //       '25.12.2024 9:49:07',
    //       'ГАБ8-11,2',
    //       '37,10',
    //       'Сунский карьер АРГЕНТ',
    //       'Щ',
    //       'в818вс790',
    //       'Приход'
    //     ]
    //   ]


    if (!weights) {
        throw new Error('Нет прихода!');
    }


    // const updateTime = weights[1][1]
    // const sum = weights[2][6]

    // ПОСЛЕДНЕЕ ОБНОВАЛЕНИЕ
    const dateTimeUpdate:string = weights[0][6].split(/(\s+)/);

    // const timeHourMinute = dateTimeUpdate.split(":");


    const dateUpd = dateTimeUpdate [0]

    // det Hours Minutes
    //
    const timeUpd = dateTimeUpdate [2].slice(0, -3)

    

        


    const weightsSliсe = weights.slice(6,)

    

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress />
            </StickyWrapper>

            <FeedWrapper>
                <HeaderWTU title='Весы' dateUpd={dateUpd} timeUpd={timeUpd} />

                <TableWeights weights={weightsSliсe} />
            </FeedWrapper>
        </div>
    )
 }

 export default WeightsPage