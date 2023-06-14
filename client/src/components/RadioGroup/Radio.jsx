import * as React from "react";
import './Radio.css'

export const RadioGroup = ({ onChange, selected, children }) => { 
  const RadioOptions = React.Children.map(children, (child) => { 
    return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <label htmlFor={value}>{children}</label> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={
        onChange
       } 
     /> 
   </div> 
 ); 
}; 