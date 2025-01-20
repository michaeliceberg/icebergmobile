'use client'

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
import { useState } from "react"

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
}

export const AddWork = ({
  carNum, carId
}:Props) => {
 


  // const [pending, startTransition] = useTransition()
  // const [status, setStatus] = useState('')

  // console.log(pending)
  // console.log(status)




 
 
 
 
 const [file, setFile] = useState<File>()
 


const HandleOnClick = () => {

    // // console.log('pending')

    // console.log(file)
    // // console.log(picture)
    // startTransition(()=> {

    //   uploadNewWork(detailsWork)
    //   .then(()=>{
    //     setStatus('Работа добавлена! Закройте и обновите')
    //   })

    // })
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
      <Button variant='default' className="">
              {carNum}
      </Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {/* <p className="pb-2 flex justify-center content-center">{contrag}</p> */}
            <p className="mt-2 pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">Новая работа</p>
            {/* <p className="mt-2 pb-2 flex justify-center content-center">{done}</p> */}
          </DialogTitle>
          
          <DialogDescription className="text-center">
            {/* <p className={stampOriginal.length > 0 ? "bg-white" : "bg-yellow-200 font-bold flex justify-center content-center rounded-xl"}> */}
              {/* {stampOriginal.length > 0 ? "Изменить рецепт:" : "⚠️ Новый рецепт!"} */}
            {/* </p> */}
            {carNum}
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
                    value={detailsWork.odometerWas}
                    className="col-span-3" 
                    onChange={(e)=>{setDetailsWork({...detailsWork, odometerWas: (e.target.value)}) }}
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
