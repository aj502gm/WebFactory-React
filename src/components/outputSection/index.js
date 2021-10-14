import { useContext, useEffect } from "react";
import { txtDataCT } from "../../context/txtAreaData/TxtDataCT";
export default function OutPutTxt(){
    const { htmlDataTemplate } = useContext(txtDataCT);
    useEffect(() => {
        const node = document.querySelector('#outputTxt');
        node.innerHTML = {htmlDataTemplate}
        //alert(node.innerHTML.value);
    });
    return(
        <div className="outputBox border black-success border-5 m-1" id = "outDiv">
            <iframe id = 'outputTxt' dangerouslySetInnerHTML = {htmlDataTemplate} sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts" > 
    
            </iframe>
        </div>
    )
}