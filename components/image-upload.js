'use client'

import { useState } from 'react';
import { Button } from './ui/button';

const ImageUpload = () => {
    const [pictureFile, setPictureFile] = useState(null);


    const [vall, setVall] = useState(0)


    const pictureChangeHandler = event => {
        setPictureFile(event.target.files[0]);

    };

    const uploadPictureHandler = async () => {
        // console.log('TRRYYYY')
        const pictureData = new FormData();
        pictureData.append('image', pictureFile);
        try {
            setVall(20)
            
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: profilePicData,
            });
            const data = await response.json();
            if (!response.ok) {
                throw data;
            }
            setPictureFile(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="input-group input-group-sm mb-3">

            <h1>{vall}</h1>

            <input accept=".png, .jpg" type="file" className="form-control" name='picture' onChange={pictureChangeHandler} />
            {/* <button className={`btn btn-primary btn-sm px-3 ${(isLoading || !pictureFile) && 'disabled'}`} onClick={uploadPictureHandler}> */}
            <Button className="btn btn-primary btn-sm px-3" onClick={uploadPictureHandler}>
               
                UPLOAD
                {/* <i className="fa-solid fa-upload"></i> : */}
            </Button>
        </div>
    );
};
export default ImageUpload;