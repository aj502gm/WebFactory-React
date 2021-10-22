import CodePanel from "./CodePanel";
import { txtDataCT } from "../../context/txtAreaData/TxtDataCT";
import { useContext } from "react";
export default function CodeEditor(){
    const {htmlCheckBox, cssCheckBox, jsCheckBox} = useContext(txtDataCT);
    return(
        <div className="bg-dark  border ligth-success border-2 d-flex" >
            {!htmlCheckBox && <CodePanel labelValue = "HTML" txtAreaId = "htmlTxt" idPanel = "htmlSelector" idMainPanel = "htmlDiv" btnClassStyle = "btn btn-outline-danger ms-2 mt-1"></CodePanel> }
            {!cssCheckBox  &&<CodePanel labelValue = "CSS" txtAreaId = "cssTxt" idPanel = "cssSelector" idMainPanel = "cssDiv" btnClassStyle = "btn btn-outline-primary ms-2 mt-1"></CodePanel> }
            {!jsCheckBox && <CodePanel labelValue = "JS" txtAreaId = "jsTxt" idPanel = "jsSelector" idMainPanel = "jsDiv" btnClassStyle = "btn btn-outline-warning ms-2 mt-1"></CodePanel>}
        </div>
    )
}