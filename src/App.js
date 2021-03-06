import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeEditor from './components/codeEditorSection/index';
import Nav from "./components/nav/index";
import {TxtDataProvider} from "./context/txtAreaData/TxtDataCT";
import {useContext, useEffect} from "react";
import { txtDataCT } from "./context/txtAreaData/TxtDataCT";
import OutPutTxt from "./components/outputSection/index";
// var FileSaver = require('file-saver');
import FileSaver from 'file-saver';
export let zip = require('jszip')();
function App() {
  const { htmlDataTemplate } = useContext(txtDataCT);
  return (
    <TxtDataProvider>
      <div className="App">
          <Nav></Nav>
          <CodeEditor></CodeEditor>
          <OutPutTxt></OutPutTxt>
      </div>
    </TxtDataProvider>      
  );
}

export default App;

