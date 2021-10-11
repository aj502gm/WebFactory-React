import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeEditor from './components/codeEditorSection/index';
import Nav from "./components/nav/index";
import OutPutTxt from "./components/outputSection/index";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <CodeEditor></CodeEditor>
      <OutPutTxt></OutPutTxt>
    </div>
  );
}

export default App;
