import { useState } from "react";
import { StyledBox } from "./box.styles"

const Box =()=>{
    const [color, setColor] = useState('orange')
    return (
        <>
        <StyledBox $color={color}/>
        <button onClick={()=>changeColor(setColor, color)}>CHANGE COLOR</button>
        
        </>
    
    )
};
const changeColor =(setColor, color)=>{

if(color==='orange'){
    setColor('blue')
}else{
    setColor('orange')
}
}
export default Box