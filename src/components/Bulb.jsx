import React, {useState} from 'react';
import Img1 from "../image/pic_bulboff.gif";
import Img2 from "../image/pic_bulbon.gif";
import "./Screen.css";

const Bulb = () => {
    const [bulb, setBulb] = useState(true);

    return (
        <>
        <div className="bulb-container">
        <h3>Click/tap on the bulb to turn it On/Off</h3>
        <img src={bulb? Img1 : Img2} onClick={()=> setBulb(!bulb)}/>
        </div>
        </>
    )
};

export default Bulb;