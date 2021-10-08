import HeaderElement from "./HeaderElement"
export default function Header({labelValue, panelId, btnClassStyle}){
    return(
        <div className="bg-gray d-flex">
            <HeaderElement labelValue ={labelValue} panelId = {panelId} btnClassStyle = {btnClassStyle}></HeaderElement>
        </div>
    )
}