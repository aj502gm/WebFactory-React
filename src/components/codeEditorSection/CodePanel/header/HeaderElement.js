export default function HeaderElement({labelValue, panelId, btnClassStyle}){
    return(
        <>
            <a href = "#" className={btnClassStyle}  id ={panelId}>↑</a>
            <h5 className = "m-2">{labelValue}</h5>
        </>
    )
}