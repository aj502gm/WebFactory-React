import {useState} from "react";
export default function HeaderElement({labelValue, panelId, btnClassStyle}){
    const [fileContent, setFileContent] = useState();

    const showFileIpt = (e) => {
        const fileIpt = document.getElementById('fileInput');
        fileIpt.accept = (e.target.id === 'htmlSelector')? '.html': (e.target.id === 'cssSelector')? '.css' : ".js";
        fileIpt.click();
    }
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
            // console.log(e.target.files);
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            setFileContent(reader.result);
            console.log(fileContent);
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