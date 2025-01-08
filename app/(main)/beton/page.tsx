import { FeedWrapper } from "@/components/feed-wrapper"
import { Header } from "@/components/header"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { TableBeton } from "@/components/table-beton"

import { UserProgress } from "@/components/user-progress"
import { constBeton } from "@/constBeton"


 const BetonPage = async () => {

  
  const beton = constBeton
    
const betonSliсe = beton.slice(5,200).filter(el=>el[0] != '')


return(
    <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
            <UserProgress />
        </StickyWrapper>

        <FeedWrapper>
            <Header title='Бетон'/>

            <TableBeton beton={betonSliсe} city='Щёлково'/>
        </FeedWrapper>
    </div>
    )
 }

 export default BetonPage