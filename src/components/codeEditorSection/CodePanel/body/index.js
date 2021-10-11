import { txtDataCT } from '../../../../context/txtAreaData/TxtDataCT';
import { useState } from 'react';
import {useContext, useEffect } from "react";
export default function Body({txtAreaId}){
    const [coding, setCoding] = useState();
    const {htmlDataTemplate,cssDataTemplate} = useContext(txtDataCT);
    // useEffect(() => {
    //     console.log((this.id === 'htmlTxt')? htmlDataTemplate : cssDataTemplate);
    // },[])
    console.log(htmlDataTemplate);
    return(
        <div className = "">
            <textarea value = {coding} onChange= {({target : {value}}) => setCoding(value)} id = {txtAreaId} className = "m-2 texto"></textarea>
        </div>
    )
}