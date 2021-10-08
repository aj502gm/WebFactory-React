export default function CheckBoxElement({labelValue, checkId }){
    return(
        <>
            <label for="html-check">{labelValue}</label>
            <input type="checkbox" id={checkId} className = "checkBox" ></input>
        </>
    )
}