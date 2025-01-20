// 'use client'

// import { ChangeEvent, useState } from "react";


// export const Uploader = () => {



// const [img, setImg] = useState<object>('')
// const [colorsAndImages, setColorsAndImages] = useState<[{image: object}]>([{image: {}}])

// const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
//     const { files } = event.target;
  
//     // Or if you don't prefer Object destructuring assignment...
//     // const files = event.target.files;
  
//     // Rest of the logic here
//     setImg(JSON.stringify(files))
//     // se
//   }
//     return (

//         <div>   
//             <input type="file" name="image" placeholder='Image' onChange={e => handleSetImage(e)}/>
//         </div>

//     )
// }