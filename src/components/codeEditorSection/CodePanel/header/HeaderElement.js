import {useState, useContext} from "react";
import { txtDataCT } from "../../../../context/txtAreaData/TxtDataCT";
export default function HeaderElement({labelValue, panelId, btnClassStyle}){
    const [fileContent, setFileContent] = useState("");
    const { htmlFileContent, setHtmlFileContent, cssFileContent, setCssFileContent, jsFileContent, setJsFileContent } = useContext(txtDataCT);
    let algo = "";
    const showFileIpt = (e) => {
        const fileIpt = document.getElementById('fileInput');
        fileIpt.accept = (e.target.id === 'htmlSelector')? '.html': (e.target.id === 'cssSelector')? '.css' : ".js";
        fileIpt.click();
    }
    const handleFileUpload = async (e) => {
        try{
            const file = e.target.files[0];
             console.log(e.target.files.length);
            const reader = new FileReader();
            await reader.readAsText(file);
            reader.onload = async () => {
             //<- SI TRAE LOS DATOS CORRECTAMENTE (CONFIRMADO)
                if (document.getElementById('fileInput').accept === '.html') {
                    alert('html');
                    setHtmlFileContent(reader.result);
                } else if (document.getElementById('fileInput').accept === '.css') {
                    setCssFileContent(reader.result);
                } else {
                    setJsFileContent(reader.result);
                }
            }
        }catch(err){
            console.warn(err);
        }
            /* SET FILE CONTENT IS NOT WORKING PROPERLY... CHANGES ARE MADE  ONE CLICK LATER*/
    }
    return(
        <>
            <input id="fileInput" type="file" style = {{display: "none"}} className={btnClassStyle} onChange = {(e) => handleFileUpload(e)}/>
            <button className = {btnClassStyle} onClick = {(e) =>showFileIpt(e)} id = {panelId}>↑</button>
            <h5 className = "m-2">{labelValue}</h5>
        </>
    )
}