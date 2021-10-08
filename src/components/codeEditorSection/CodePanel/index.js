import Header from "./header";
import Body from "./body";
export default function CodePanel({labelValue, idPanel, idMainPanel, btnClassStyle}){
    return(
        <div className="bg-gray border ligth-success border-2 wrap m-3" id = {idMainPanel}>
            <Header labelValue = {labelValue} idPanel = {idPanel} btnClassStyle = {btnClassStyle}></Header>
            <Body></Body>
        </div>
    )
}