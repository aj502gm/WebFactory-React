import Buttons from "./Buttons";
import { txtDataCT } from "../../../context/txtAreaData/TxtDataCT";
// import zip from './../../../App';
export default function ButtonSection(){
   
    // const saveProject = () => {
    //     zip.file("hello.txt", "Wassup");
    //     zip.generateAsync({type: "blob"}).then( (files) => saveAs(files, "myProject.zip")); //.zip
    // }
    return(
        <>
            <div className = "d-flex">
                <a href = "#" className="btn btn-outline-success p-2 m-3">Save project</a>
                <Buttons></Buttons>
            </div>
        </>
        
    )
}