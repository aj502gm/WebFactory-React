import Buttons from "./Buttons";
import { txtDataCT } from "../../../context/txtAreaData/TxtDataCT";
import {zip} from './../../../App';
import fileSaver   from "file-saver";
import { useContext } from "react";
export default function ButtonSection(){
   const {htmlDataTemplate, jsDataTemplate, cssDataTemplate} = useContext(txtDataCT);
    const saveProject = () => {
        zip.file("index.html", htmlDataTemplate);
        zip.file("styles.css", cssDataTemplate);
        zip.file("app.js", jsDataTemplate);

        zip.generateAsync({type: "blob"}).then( (files) => fileSaver.saveAs(files, "myProject.zip")); //.zip
    }
    return(
        <>
            <div className = "d-flex">
                <button href = "#" className="btn btn-outline-success p-2 m-3" onClick = {saveProject}>Save project</button>
                <Buttons></Buttons>
            </div>
        </>
        
    )
}