'use client'

import { uploadNewWork } from "@/actions/upload-new-work"
// import { uploadNewWork } from "@/actions/upload-new-work"
// import { uploadNewClient } from "@/actions/upload-new-client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useTransition } from "react"

type Props = {
//   allWorksInfo: {
//     id: number,
//     carId: number,
//     dateDone: Date,
//     odometerWas: string,
//     workDone: string,
//     brand: string,
//     model: string,
//     vin: string,
//     yearProduction: string,
//     number: string,
//     clientFullName: string,
//     description: string,
//     phone: string,
//     imageUrl: string,
// }[]
  carNum: string,
  carId: number,
  odometer: string,
  type: string,
}

export const AddWork = ({
  carNum, carId, odometer, type
}:Props) => {
 


  const [pending, startTransition] = useTransition()
  const [status, setStatus] = useState('Опишите проделанные работы:')

  console.log(pending)
  // console.log(status)



  const spacedCarNum = `${carNum[0] + " " + carNum.slice(1, 4) + " " + carNum.slice(4, 6) + " "+ carNum.slice(6)}`
 
  let typeCar:string = ''

  let buttonVariant: "sam" | "ton" | "mix" = "sam"
  if (type == 'С') {
    typeCar = 'Самосвал'
    buttonVariant = 'sam'
  } else if (type == 'М') {
    typeCar = 'Миксер'
    buttonVariant = 'mix'
  } else if (type == 'Т') {
    buttonVariant = 'ton'
    typeCar = 'Тонар'
  }
  
  const [file, setFile] = useState<File>()
 


  const HandleOnClick = () => {

      // // console.log('pending')

      // console.log(file)
      // // console.log(picture)
      startTransition(()=> {

        uploadNewWork(detailsWork)
        // .then(()=>{
        //   setStatus('Работа добавлена! Закройте и обновите')
        // })
        setStatus('Работа добавлена! Закройте и обновите')
      })
    }


  if (file) {

  const formData = new FormData();
  formData.append("file", file);
 
  // fetch("/api/upload", {
    // fetch(`/api/upl/${file.name}`, {
    fetch(`/api/${file.name}`, {
        // fetch(`/api/${file}`, {
        // fetch("/api/upl", {
        // method: "POST",
      method: "GET",
    // body: formData,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

  }






  const [detailsWork, setDetailsWork] = useState (
    {
      id: 1001,
      carId: carId,
      imageUrl: '',
      odometerWas: '',
      nextTO: '',
      workDone: '',
      dateDone: new Date()
    }
  )

  return (
    <Dialog>
      <DialogTrigger asChild>

      {/* <Button variant='default' className="flex m-auto mb-10  h-screen"> */}
      <Button variant={buttonVariant} className="w-full">
          {carNum}
      </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p className="mt-2 pb-2 flex justify-center content-center text-yellow-300 bg-gray-700 pt-2 rounded-xl">
              {typeCar} {spacedCarNum.toUpperCase()}
            </p>
          </DialogTitle>
          
          <DialogDescription className= {status == "Работа добавлена! Закройте и обновите" 
            ? "text-center bg-rounded bg-green-500 text-white font-bold text-lg animate-bounce rounded-xl"
            : "text-center"
            }
            >

            {status}
          </DialogDescription>
        </DialogHeader>





          <div className="grid gap-4 py-4">

            <div key = {'Что делали'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Что делали
                </Label>
                <Input 
                    id='workDone'
                    value={detailsWork.workDone}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsWork({...detailsWork, workDone: (e.target.value)}) }}
                />
            </div>


            <div key = {'Одометр'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Одометр
                </Label>
                <Input 
                    id='odometerWas'
                    placeholder={odometer}
                    value={detailsWork.odometerWas}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsWork({...detailsWork, odometerWas: (e.target.value)}) }}
                />
            </div>



            <div key = {'Это ТО?'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  СледущееТО
                </Label>
                
                <Input 
                    id='nextTO'
                    placeholder={`${+odometer + 15000}`}
                    value={detailsWork.nextTO}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsWork({...detailsWork, nextTO: (e.target.value)}) }}
                />
            </div>

            


            {/* <div key = {'На будущее'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  На будущее
                </Label>
                <Input 
                    id='telegram'
                    value={detailsWork.}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsWork({...detailsWork, telegram: (e.target.value)}) }}
                />
            </div> */}



            <div key = {'фото'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  фото
                </Label>
                <Input 
                    id="photo" 
                    type="file" 
                    // value={detailsClient.telegram}
                    className="col-span-3" 
                    onChange={(e)=>{setFile(e.target.files?.[0])}}
                    // onChange={(e)=>{handleNew(e)}}
                />
            </div>

            
          </div>
        
        <DialogFooter>
          <Button 
            className="w-full" 
            type="submit" 
            onClick={HandleOnClick}
          >
            Добавить работу

            
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
