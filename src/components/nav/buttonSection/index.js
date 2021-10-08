import Buttons from "./Buttons"
export default function ButtonSection(){
    return(
        <>
            <div className = "d-flex">
                <a href = "#" className="btn btn-outline-success p-2 m-3">Save project</a>
                <Buttons></Buttons>
            </div>
        </>
        
    )
}