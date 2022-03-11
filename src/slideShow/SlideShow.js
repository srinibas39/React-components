import { useState } from "react";
import { sliderData } from "./SliderData"
import "./SlideShow.css"

export const SlideShow=()=>{
    const [curr,setCurr]=useState(0);
    const handleNext=()=>{
         curr<=sliderData.length?setCurr(curr+1):setCurr(0);
    }
    const handlePrev=()=>{
         curr<=0?setCurr(sliderData.length):setCurr(curr-1)
    }
    return <div>
        <h2>Slide show</h2>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        {
            sliderData.map((el,idx)=>{
                return <img className={curr===idx?"active":"not-active"} key={idx} src={el.image} alt={"image"}></img>
            })
        }
    </div>
}