import { useContext, useEffect, useState } from "react";
import { txtDataCT } from "../../context/txtAreaData/TxtDataCT";
export default function OutPutTxt(){
    const { htmlDataTemplate } = useContext(txtDataCT);
    const htmlprueba = `<!doctype html>
    <html lang="en"> 
        <head> 
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css"></style>
        </head>
        <body><h1>HOJFDSHFJSDAHFJDSHFJSDHAJFHDSAJF</h1><script></script></body>
    </html>;`
    //const [innertHtmlData, setInnerHtmlData] = useState({__html: htmlDataTemplate});
    // useEffect(() => {
    //     const node = document.querySelector('#outputTxt');
    //     node.innerHTML = {__html: htmlDataTemplate}
    //     //alert(node.innerHTML.value);
    //     console.error({__html: htmlDataTemplate}.__html);
    //     console.log()
    // });
    return (
        <div className="outputBox border black-success border-5 m-1" id = "outDiv"  dangerouslySetInnerHTML = {{__html: htmlDataTemplate}}>
        </div>
    )
}

/*
https://codepen.io/jamesnimlos/pen/VKAaJO?editors=1010*/
//<iframe id = 'outputTxt' sandbox='allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation' dangerouslySetInnerHTML = ${htmlprueba}></iframe>