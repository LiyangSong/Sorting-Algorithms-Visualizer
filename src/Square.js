import { useState } from "react";

export default function Square({ number }) {
    // const [position, setPosition] = useState({number, numbers}){
    //     //number is each element in the numbers
    //     const idx = 0;

    //     const[position,setPosition]=useState({
    //         x=index*50+10,
    //         y=0
    //     })
    // }
    return(
        <div className="square">
            {number}
        </div>
    )
}