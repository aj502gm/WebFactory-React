import CheckBoxElement from "./CheckBoxElement"
export default function CheckBoxArea(){
    return(
        <>
            <CheckBoxElement labelValue = "HTML" checkId = "html-check" />
            <CheckBoxElement labelValue = "CSS" checkId = "css-check" />
            <CheckBoxElement labelValue = "JS" checkId = "js-check" />
        </>
    )
}