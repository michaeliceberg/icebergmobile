import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { detailsShowList } from "./dialog-recipe";


type Props = {

    recipeVariants: {
        details: string;
        id: number;
        date: Date;
        zavod: string;
        stampBase: string;
        stampSuffix: string;
        betonAsphalt: string;
    }[],

    foundInitialSuffix: string,

    setSelectedValue: (value: string) => void      
    setDetails: (value: {гранит5_20: number,
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
        нтф: number,}) => void      
    
}



export function BetonRecipeRadio({

    recipeVariants,
    foundInitialSuffix,
    setSelectedValue,
    setDetails,
    

} : Props) {

    const handleRadioPress = (value:string) => {
        setSelectedValue(value)
        const DetailsObject = detailsShowList(recipeVariants.filter(el => el.stampSuffix == value)[0]?.details)

        setDetails(
            {
                гранит5_20: DetailsObject.filter(el=>el.material==='гранит5_20')[0].mass,
                цемент42: DetailsObject.filter(el=>el.material==='цемент42')[0].mass,
                пц500: DetailsObject.filter(el=>el.material==='пц500')[0].mass,
                песок_бет: DetailsObject.filter(el=>el.material==='песок_бет')[0].mass,
                гравий5_20бет: DetailsObject.filter(el=>el.material==='гравий5_20бет')[0].mass,
                галька: DetailsObject.filter(el=>el.material==='галька')[0].mass,
                линамикс: DetailsObject.filter(el=>el.material==='линамикс')[0].mass,
                вода: DetailsObject.filter(el=>el.material==='вода')[0].mass,
                зола: DetailsObject.filter(el=>el.material==='зола')[0].mass,
                stam: DetailsObject.filter(el=>el.material==='stam')[0].mass,
                цемент42накши: DetailsObject.filter(el=>el.material==='цемент42накши')[0].mass,
                c3: DetailsObject.filter(el=>el.material==='c3')[0].mass,
                мурапор: DetailsObject.filter(el=>el.material==='мурапор')[0].mass,
                basf: DetailsObject.filter(el=>el.material==='basf')[0].mass,
                гранит0_20: DetailsObject.filter(el=>el.material==='гранит0_20')[0].mass,
                мб10_50: DetailsObject.filter(el=>el.material==='мб10_50')[0].mass,
                пыль: DetailsObject.filter(el=>el.material==='пыль')[0].mass,
                нтф: DetailsObject.filter(el=>el.material==='нтф')[0].mass,
              }
        )
        
            
    }

  return (
    // <RadioGroup defaultValue= {foundInitialSuffix} onValueChange={handleRadioP}>
    <RadioGroup defaultValue= {foundInitialSuffix} onValueChange={handleRadioPress}>

        <div className="grid grid-cols-2 justify-between">
        {/* <p>{selectedV}</p> */}

        {recipeVariants.length > 0 && 
        
        recipeVariants.map(el => (

            <div key={el.id} className="flex items-center space-x-2 pt-2 pb-2 mb-2 mr-2 bg-gray-200 rounded-xl pl-2">
                <RadioGroupItem value={el.stampSuffix} id="r1" />
                <Label htmlFor="r1">{el.stampSuffix}</Label>

            </div>

        ))
        }


        </div>
    </RadioGroup>
  )
}

