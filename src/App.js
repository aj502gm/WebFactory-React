import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeEditor from './components/codeEditorSection/index';
import Nav from "./components/nav/index";
import OutPutTxt from "./components/outputSection/index";
import {TxtDataProvider} from "./context/txtAreaData/TxtDataCT";
// var FileSaver = require('file-saver');
let zip = require('jszip')();
function App() {
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

