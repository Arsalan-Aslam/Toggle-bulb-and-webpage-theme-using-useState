import React, {useState} from 'react';
import Img1 from "../image/pic_bulboff.gif";
import Img2 from "../image/pic_bulbon.gif";

const Image = () => {
    const [image, setImage] = useState(true);

    return (
        <img src={image? Img1 : Img2} onClick={()=> setImage(!image)}/>
    )
};

export default Image;