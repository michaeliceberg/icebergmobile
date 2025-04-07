
'use client'

// import { uploadNewWork } from "@/actions/upload-new-work"
// import { uploadNewClient } from "@/actions/upload-new-client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { works } from "@/db/schema"
import { BookText, CalendarDays } from "lucide-react"
import { format } from 'date-fns';
import { Separator } from "./ui/separator"

type Props = {
  works: typeof works.$inferInsert[],
  carNum: string,
  type: string,
  next_to: string,
  
}

const DateFormat = (inDate: Date) => {
  
  const formattedDate: string = format(inDate, 'dd.MM.yyyy');
  const formattedTime: string = format(inDate, 'hh:mm');

  return `${formattedDate} ${formattedTime}`

}





// const ThousandsKM = (kmIn: string | null | undefined) => {
//   if ( kmIn != undefined && kmIn != null) {
//     return `${kmIn.slice(0, 3)} ${kmIn.slice(-3, kmIn.length)}`

//   }
//   return kmIn
// }   Math.trunc()



const ThousandsKM = (kmIn: string | null | undefined) => {
  if ( kmIn != undefined && kmIn != null) {
    if (+kmIn < 1000) {
      return (kmIn)
    }
    return `${Math.trunc(+kmIn/1000)} ${Math.trunc(+kmIn % 1000)}`
    // return `${kmIn.slice(0, 3)} ${kmIn.slice(-3, kmIn.length)}`

  }
  return kmIn
}



export const LookWorks = ({
  works,
  carNum,
  type,
}:Props) => {
 


  const spacedCarNum = `${carNum[0] + " " + carNum.slice(1, 4) + " " + carNum.slice(4, 6) + " "+ carNum.slice(6)}`
 
  let typeCar:string = ''
 if (type == 'С') {
   typeCar = 'Самосвал'
 } else if (type == 'М') {
   typeCar = 'Миксер'
 } else if (type == 'Т') {
   typeCar = 'Тонар'
 }




 

  return (
    <Dialog>
      <DialogTrigger asChild>

      {/* <Button variant='default' className="flex m-auto mb-10  h-screen"> */}
      <Button variant='default' className="" size='sm'>
          <BookText />
      </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p className=
            
            // "mt-2 pb-2 flex justify-center content-center text-yellow-300 bg-gray-700 pt-2 rounded-xl">
            
            {type=='С' 
            ? "mt-2 pb-2 flex justify-center content-center text-white bg-red-500/90 pt-2 rounded-sm"
            
            : type == 'М' 
            ? "mt-2 pb-2 flex justify-center content-center text-white bg-amber-500/90 pt-2 rounded-sm"
            
            
            : "mt-2 pb-2 flex justify-center content-center text-white bg-gray-500/90 pt-2 rounded-sm"
            }
            >

            
            
              Работы по {typeCar}у {spacedCarNum.toUpperCase()}
            </p>
          </DialogTitle>
          
          {/* <DialogDescription className="text-center">
            опишите проделанные работы:
          </DialogDescription> */}
        </DialogHeader>





        {/* <div className="grid gap-4 py-4 "> */}
        <div className="">

            {works.map((work, index) => (
              
              <div key={index*1092} className="">

                <Separator className="mt-2 mb-2"/>
                <div className="grid grid-cols-2 justify-center gap-4 pt-2">



                  <div>
                    <div key = {'dateDone'} className="flex pb-2 gap-2 mt-2">
                      <CalendarDays className="text-gray-600 "/> 

                      {work.dateDone != undefined ? 
                        <p className="bg-green-200 rounded-sm pl-2 pr-2"> {DateFormat(work.dateDone)} </p> 
                        : ""}
                    
                    </div>

                  

                    <div key = {'workDone'} className="flex pb-2 gap-2">
                      {/* <Wrench className="text-gray-600"/>  */}


                      {work.workDone}             
                    </div>


                  </div>






                  <div className="mt-2">


                    <p>одометр: {ThousandsKM(work.odometerWas)} км</p>

                    {work.isTO == '1' && 
                      <p className="text-white justify-center mx-auto content-center text-center bg-gray-600 font-bold rounded-t-sm w-full">
                        пройдено то
                      </p>
                    }

                    <p className=
                    {work.isTO == '1' ? "border-gray-600 border-2 pl-2 pr-2 rounded-b-sm font-bold": ""}
                    >
                      след. то : {ThousandsKM(work.nextTO)} км
                    </p>

                  </div>

                
                


                



                
                
                </div>
                
 


                

              </div>

            ))}


            
          </div>
        
        <DialogFooter>
          
            

            
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
