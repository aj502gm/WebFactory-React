export default function HeaderElement({labelValue, panelId, btnClassStyle}){
    const mostrar = () => {
//document.getElementById('fileInput').click();
//document.getElementById('fileInput').click();
        let input = document.createElement('input');
        input.type = 'file';
         input.accept = '.html';//(esto.id === 'htmlSelector')? '.html': (esto.id === 'cssSelector')? '.css' : ".js";
        // let outputTxt = (esto.id === 'htmlSelector')? 'htmlTxt': (esto.id === 'cssSelector')? 'cssTxt' : "jsTxt";
        input.onchange = _ => {
            let files =   Array.from(input.files);
            let reader = new FileReader();
            reader.onload = () => document.getElementById('htmlSelector').value = reader.result;
            reader.readAsText(files[0]);
        }
        document.getElementById('input').click();
    }
    return(
        <>
            <input id="fileInput" type="file" style={{display:'none'}} />
            <button  className={btnClassStyle} id ={panelId} onClick = {mostrar()}>↑</button>
            <h5 className = "m-2">{labelValue}</h5>
        </>
    )
}