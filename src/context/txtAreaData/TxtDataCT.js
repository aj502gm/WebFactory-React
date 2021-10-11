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
   
    const prueba = () => {
        console.log("Funciona funciona");
        return "exito";
    }
    return(
        <txtDataCT.Provider value = {{htmlDataTemplate, cssDataTemplate, jsDataTemplate, bdDataTemplate, setHtmlData, setCssData, setJsData, setBdDataTemplate}}>
            {props.children}
        </txtDataCT.Provider>
    )
}