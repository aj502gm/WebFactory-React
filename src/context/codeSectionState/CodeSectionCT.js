import { Children, useState, createContext, useEffect } from "react";


export const codeSectionCT = createContext("nnljlkljkj");

export const CodePanelStateProvider = (props) =>{
    const [htmlCheckBox, setHtmlCheckBox] = useState(`fdsfa`);
    const [cssCheckBox, setCssCheckBox] = useState(false);
    const [jsCheckBox, setJsCheckBox] = useState(false);


    return(
        <codeSectionCT.Provider value = {htmlCheckBox,setHtmlCheckBox,cssCheckBox,setCssCheckBox,jsCheckBox,setJsCheckBox}>
            {props.children}
        </codeSectionCT.Provider>
    )
}