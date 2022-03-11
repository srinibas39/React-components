import { useState } from "react";


const Comp = ({el}) => {
    const [open,setOpen]=useState(false);
    return <div>
        <div onClick={()=>setOpen(!open)}>{el}</div>
        <p>{open && "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }</p>
    </div>
}
export const Accordian = () => {
    const data = ["section1", "section2", "section3"];
    return <div>
        <h2>Accordian</h2>
        {
            data.map((el,idx) => {
                return <Comp el={el} key={idx} />
            })
        }

    </div>
}