import React, { useState, useContext, useEffect  } from "react";
import { txtDataCT } from "../../../context/txtAreaData/TxtDataCT";
export default function CheckBoxElement({labelValue, checkId }){
    const {htmlCheckBox,setHtmlCheckBox,cssCheckBox,setCssCheckBox,jsCheckBox,setJsCheckBox} = useContext(txtDataCT);
    
    const handleCheck = () => {
        if(checkId === 'html-check'){
            setHtmlCheckBox(!htmlCheckBox);
        }else if (checkId === 'css-check'){
            setCssCheckBox(!cssCheckBox);
        }else setJsCheckBox(!jsCheckBox);
    }
    return(
        <>
            <label>{labelValue} {htmlCheckBox}</label>
            <input type="checkbox" id={checkId} className = "checkBox" onChange = {handleCheck}></input>
        </>
    )
}