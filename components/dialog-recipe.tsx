'use client'

import { updateRecipeInExpenses } from "@/actions/update-recipe-exp"
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
import { startTransition, useState } from "react"
import { BetonRecipeRadio } from "./beton-recipe-radio"
import { recipe } from "@/db/schema"
import { KeySquare } from "lucide-react"

type Props = {
    stampFromBetonToRender: string  // Название Рецепта из Google после Replace 
    stampRow: string
    contrag: string
    done: string
    recipeData:  typeof recipe.$inferSelect[]  // Все рецепты чтобы Показать Варианты выбранного рецепта
    recipeDetails: {material: string, mass: number}[]  | string
    bid: string,
    isModified: string,
}



export const detailsShowList = (details: string) => {
  if (details==undefined){return []}
  // console.log(details)
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


export function RecipeDialog({
    stampFromBetonToRender,
    stampRow,
    contrag,
    done,
    recipeData, // все рецепты из recipe
    recipeDetails,  // рецепт по умолчанию который мы запихали в первый раз в Expenses
    bid,
    isModified
}: Props) {

  // console.log(isModified)


  // Смотрим , какие суффиксы есть у этого рецетпа (рецепта из гугла)
  //
  const recipeVariants = recipeData.filter(el => stampFromBetonToRender.toLowerCase().includes(el.stampBase.toLocaleLowerCase()))


  // смотрим какой из имеюихся Суффиксов написан в Самом рецепте (гугла)
  //
  const initialSuffix = recipeVariants.filter(el => stampRow.toLowerCase().includes(el.stampSuffix.toLowerCase()))
  
  let foundInitialSuffix = ''
  if (initialSuffix.length > 0) {
    foundInitialSuffix = initialSuffix[0].stampSuffix
  }


  const [status, setStatus] = useState('')


  const handleOnClickButton = async () => {

    startTransition(()=> {

      updateRecipeInExpenses(details, bid)
      .then(()=>{
        setStatus('Рецепт изменен! Закройте и обновите')
      })

    })


    // await updateRecipeInExpenses(details, bid)
  }

  
  
  type DetailsType =    {
    гранит5_20: number,
    цемент42: number,
    пц500: number,
    песок_бет: number,
    гравий5_20бет: number,
    галька: number,
    линамикс: number,
    вода: number,
    зола: number,
    stam: number,
    цемент42накши: number,
    c3: number,
    мурапор: number,
    basf: number,
    гранит0_20: number,
    мб10_50: number,
    пыль: number,
    нтф: number,
  }


  const [details, setDetails] = useState<DetailsType> (
    {
      гранит5_20: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='гранит5_20')[0].mass : 0,
      цемент42: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='цемент42')[0].mass : 0,
      пц500: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='пц500')[0].mass : 0,
      песок_бет: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='песок_бет')[0].mass : 0,
      гравий5_20бет: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='гравий5_20бет')[0].mass : 0,
      галька: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='галька')[0].mass : 0,
      линамикс: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='линамикс')[0].mass : 0,
      вода: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='вода')[0].mass : 0,
      зола: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='зола')[0].mass : 0,
      stam: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='stam')[0].mass : 0,
      цемент42накши: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='цемент42накши')[0].mass : 0,
      c3: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='c3')[0].mass : 0,
      мурапор: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='мурапор')[0].mass : 0,
      basf: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='basf')[0].mass : 0,
      гранит0_20: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='гранит0_20')[0].mass : 0,
      мб10_50: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='мб10_50')[0].mass : 0,
      пыль: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='пыль')[0].mass : 0,
      нтф: recipeDetails instanceof Array ? recipeDetails.filter(el=>el.material==='нтф')[0].mass : 0,
    }
  )


  const [selectedValue, setSelectedValue] = useState('')

  console.log(selectedValue)

  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button variant='default' className="w-full">
            <p className="text-gray-600">
              {stampFromBetonToRender}
            </p>
            {isModified == "1" && 
            <p className="ml-1">
              <KeySquare color="#74B72E" />
            </p>}

        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p className="pb-2 flex justify-center content-center">{contrag}</p>

            <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">{stampFromBetonToRender.toUpperCase()}</p>
            {/* <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">{stampRow.toUpperCase()}</p> */}
            <p className="mt-2 pb-2 flex justify-center content-center">{done}</p>
          </DialogTitle>


          <DialogDescription className="pt-5 pb-2">

            {recipeDetails instanceof Array ? "Варианты рецепта:" : "⚠️ Новый рецепт!"}

          </DialogDescription>


          {/* SUFFIX TODO: */}

          <BetonRecipeRadio 

            recipeVariants={recipeVariants} 
            foundInitialSuffix={foundInitialSuffix}
            setSelectedValue={setSelectedValue}
            setDetails={setDetails}
            

          />


        </DialogHeader>








          {details.песок_бет > 0 && 
            <div key = {'песок_бет'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  песок_бет
                </Label>
                <Input 
                    id='песок_бет'
                    inputMode="numeric"
                    pattern="[0-9.,]+"
                    value={details.песок_бет}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, песок_бет: +(e.target.value)}) }}
                />
            </div>
          }


          {details.гравий5_20бет > 0 && 
            <div key = {'гравий5_20бет'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  гравий5_20бет
                </Label>
                <Input 
                    inputMode="numeric"
                    id='гравий5_20бет'
                    value={details.гравий5_20бет}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, гравий5_20бет: +(e.target.value)}) }}
                />
            </div>
          }


          {details.цемент42 > 0 && 
            <div key = {'цемент42_5'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                цемент42
                </Label>
                <Input 
                    inputMode="numeric"
                    id='цемент42'
                    value={details.цемент42}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, цемент42: +(e.target.value)}) }}
                />
            </div>
          }


          {details.пц500 > 0 && 
            <div key = {'пц500'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                пц500
                </Label>
                <Input 
                    inputMode="numeric"
                    id='пц500'
                    value={details.пц500}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, пц500: +(e.target.value)}) }}
                />
            </div>
          }


          {details.гранит5_20 > 0 && 
            <div key = {'гранит5_20'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  гранит5_20
                </Label>
                <Input 
                    inputMode="numeric"
                    id='гранит5_20'
                    value={details.гранит5_20}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, гранит5_20: +(e.target.value)}) }}
                />
            </div>
          }


          {details.галька > 0 && 
            <div key = {'галька'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                галька
                </Label>
                <Input 
                    inputMode="numeric"
                    id='галька'
                    value={details.галька}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, галька: +(e.target.value)}) }}
                />
            </div>
          }


          {details.линамикс > 0 && 
            <div key = {'линамикс'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                линамикс
                </Label>
                <Input 
                    inputMode="numeric"
                    id='линамикс'
                    value={details.линамикс}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, линамикс: +(e.target.value)}) }}
                />
            </div>
          }
          {details.вода > 0 && 
            <div key = {'вода'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                вода
                </Label>
                <Input 
                    inputMode="numeric"
                    id='вода'
                    value={details.вода}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, вода: +(e.target.value)}) }}
                />
            </div>
          }
          {details.зола > 0 && 
            <div key = {'зола'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                зола
                </Label>
                <Input 
                    inputMode="numeric"
                    id='зола'
                    value={details.зола}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, зола: +(e.target.value)}) }}
                />
            </div>
          }

          {details.stam > 0 && 
            <div key = {'stam'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                stam
                </Label>
                <Input 
                    inputMode="numeric"
                    id='stam'
                    value={details.stam}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, stam: +(e.target.value)}) }}
                />
            </div>
          }

          {details.цемент42накши > 0 && 
            <div key = {'цемент42накши'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                цемент42накши
                </Label>
                <Input 
                    inputMode="numeric"
                    id='цемент42накши'
                    value={details.цемент42накши}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, цемент42накши: +(e.target.value)}) }}
                />
            </div>
          }


          {details.c3 > 0 && 
            <div key = {'c3'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                c3
                </Label>
                <Input 
                    inputMode="numeric"
                    id='c3'
                    value={details.c3}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, c3: +(e.target.value)}) }}
                />
            </div>
          }


          {details.мурапор > 0 && 
            <div key = {'мурапор'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                мурапор
                </Label>
                <Input 
                    inputMode="numeric"
                    id='мурапор'
                    value={details.мурапор}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, мурапор: +(e.target.value)}) }}
                />
            </div>
          }

          {details.basf > 0 && 
            <div key = {'basf'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                basf
                </Label>
                <Input 
                    inputMode="numeric"
                    id='basf'
                    value={details.basf}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, basf: +(e.target.value)}) }}
                />
            </div>
          }


          {details.мб10_50 > 0 && 
            <div key = {'мб10_50'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                мб10_50
                </Label>
                <Input 
                    inputMode="numeric"
                    id='мб10_50'
                    value={details.мб10_50}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, мб10_50: +(e.target.value)}) }}
                />
            </div>
          }


          {details.гранит0_20 > 0 && 
            <div key = {'гранит0_20'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                гранит0_20
                </Label>
                <Input 
                    inputMode="numeric"
                    id='гранит0_20'
                    value={details.гранит0_20}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, гранит0_20: +(e.target.value)}) }}
                />
            </div>
          }


          {details.пыль > 0 && 
            <div key = {'пыль'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                пыль
                </Label>
                <Input 
                    inputMode="numeric"
                    id='пыль'
                    value={details.пыль}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, пыль: +(e.target.value)}) }}
                />
            </div>
          }

          {details.нтф > 0 && 
            <div key = {'нтф'} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                нтф
                </Label>
                <Input 
                    inputMode="numeric"
                    id='нтф'
                    value={details.нтф}
                    className="col-span-3" 
                    onChange={(e)=>{setDetails({...details, нтф: +(e.target.value)}) }}
                />
            </div>
          }





        
            { status != '' &&
              <p className="mt-2 pb-2 flex justify-center content-center text-white bg-green-500 pt-2 rounded-xl">{status}</p> 
            }





        <DialogFooter >
          <Button 
            className="w-full" 
            type="submit" 
            onClick={handleOnClickButton}
          >
            {recipeDetails instanceof Array 
             ?
            <div className="flex flex-1 justify-center ">
              <p>
                Сохранить изменения
              </p>
              <p className="ml-1">
                <KeySquare color="#74B72E" />
              </p>
            </div>
            :
             "Добавить рецепт"}

            
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

