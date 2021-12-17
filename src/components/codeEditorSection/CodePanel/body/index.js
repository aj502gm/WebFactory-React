import { txtDataCT } from '../../../../context/txtAreaData/TxtDataCT';
import { useState } from 'react';
import React,{useContext, useEffect, useRef } from "react";
export default function Body({txtAreaId}){
    const [coding, setCoding] = useState("");
    const {htmlDataTemplate, cssDataTemplate, jsDataTemplate, bdDataTemplate, setHtmlData, setCssData, setJsData, setBdDataTemplate, htmlFileContent, cssFileContent, jsFileContent} = useContext(txtDataCT);
    // const isInitialMount = react.useRef(true);
    
    useEffect(() => {
        let tempHtml = htmlDataTemplate;
        if(txtAreaId === 'htmlTxt'){
            tempHtml = tempHtml.replace(bdDataTemplate, `<body>${(coding === undefined)?'':coding}${jsDataTemplate}</body>`);
            setBdDataTemplate(`<body>${(coding === undefined)?'':coding}${jsDataTemplate}</body>`);
            setHtmlData(tempHtml);
        }else if(txtAreaId === 'cssTxt'){
            tempHtml = tempHtml.replace(cssDataTemplate, `<style type="text/css">${(coding === undefined)?'':coding}</style>`);
            setCssData(`<style type="text/css">${(coding === undefined)?'':coding}</style>`);
            setHtmlData(tempHtml);  
            console.log(htmlDataTemplate);
        }else{
            tempHtml = tempHtml.replace(jsDataTemplate, `<script>${(coding === undefined)?'':coding}</script>`);
            setJsData(`<script>${(coding === undefined)?'':coding}</script>`);
            setHtmlData(tempHtml);
            console.log(htmlDataTemplate);
        }
    });
   /// console.log(htmlDataTemplate);
    return(
        <div className = "">
            <textarea value = 

            {(coding === "" && txtAreaId === 'htmlTxt')? htmlFileContent : (coding === "" && txtAreaId === 'cssTxt')? cssFileContent:(coding === "" && txtAreaId === 'jsTxt')? jsFileContent: coding} 
            onChange= {({target : {value}}) => {console.log('act');setCoding(value)}} id = {txtAreaId} className = "m-2 texto">

            </textarea>
        </div>
    )
}