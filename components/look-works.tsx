
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
import { BookText, CalendarDays, Wrench } from "lucide-react"
import { format } from 'date-fns';

type Props = {
  works: typeof works.$inferInsert[],
  carNum: string,
  type: string,
  
}

const DateFormat = (inDate: Date) => {
  
  const formattedDate: string = format(inDate, 'dd.MM.yyyy');
  const formattedTime: string = format(inDate, 'hh:mm');

  return `${formattedDate} ${formattedTime}`

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
      <Button variant='default' className="">
              <BookText />
      </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p className=
            
            // "mt-2 pb-2 flex justify-center content-center text-yellow-300 bg-gray-700 pt-2 rounded-xl">
            
            {type=='С' 
            ? "mt-2 pb-2 flex justify-center content-center text-white bg-red-500/90 pt-2 rounded-xl"
            
            : type == 'М' 
            ? "mt-2 pb-2 flex justify-center content-center text-white bg-amber-500/90 pt-2 rounded-xl"
            
            
            : "mt-2 pb-2 flex justify-center content-center text-white bg-gray-500/90 pt-2 rounded-xl"
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
              

              <div key={index*1092} className="border-2 border-dashed border-gray-600 rounded-xl p-4 mt-4">

                
                  <div className=" flex justify-center gap-4">

                  {work.isTO == '1' && 
                    <p className="pt-4 pb-4 bg-gray-600 p-2 text-white font-bold rounded-xl w-[60px] justify-center text-center">
                      ТО
                    </p>
                  }

                    <div>
                      <p>одометр: {work.odometerWas} км</p>
                      <p>след. то : {work.nextTO} км</p>

                    </div>

                  </div>
                
 


                <div key = {'dateDone'} className="flex pb-2 gap-2 mt-6">
                  <CalendarDays className="text-gray-600"/> 

                  {work.dateDone != undefined ? DateFormat(work.dateDone)  : ""}
                
                </div>

                

                <div key = {'workDone'} className="flex pb-2 gap-2 mt-1">
                  <Wrench className="text-gray-600"/> 
                  {work.workDone}             
                </div>

              </div>

            ))}



           



            <div key = {'Это ТО?'} className="grid grid-cols-4 items-center gap-4">
                
            </div>

            


           

            
          </div>
        
        <DialogFooter>
          
            

            
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
