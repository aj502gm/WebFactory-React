import { Children, useState, createContext, useEffect } from "react";


export const txtDataCT = createContext("fdsfsadfd");

export const TxtDataProvider = (props) =>{
    const [htmlDataTemplate, setHtmlData] = useState(`<!doctype html>
    <html lang="en"> 
        <head> 
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css"></style>
        </head>
        <body><script></script></body>
    </html>`);
    /*
    */ 
    const [cssDataTemplate, setCssData] = useState(`<style type="text/css"></style>`);
    const [jsDataTemplate, setJsData] = useState(`<script></script>`);
    const [bdDataTemplate, setBdDataTemplate] = useState(`<body><script></script></body>`);

    const [htmlCheckBox, setHtmlCheckBox] = useState(false);
    const [cssCheckBox, setCssCheckBox] = useState(false);
    const [jsCheckBox, setJsCheckBox] = useState(false);
   
    const [htmlFileContent, setHtmlFileContent] = useState("");
    const [cssFileContent, setCssFileContent] = useState("");
    const [jsFileContent, setJsFileContent] = useState("");

    return(
        <txtDataCT.Provider value = {{htmlDataTemplate, cssDataTemplate, jsDataTemplate, bdDataTemplate, setHtmlData, setCssData, setJsData, setBdDataTemplate,htmlCheckBox,setHtmlCheckBox,cssCheckBox,setCssCheckBox,jsCheckBox,setJsCheckBox,htmlFileContent, setHtmlFileContent,cssFileContent, setCssFileContent,jsFileContent, setJsFileContent}}>
            {props.children}
        </txtDataCT.Provider>
    )
}