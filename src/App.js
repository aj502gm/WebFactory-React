import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeEditor from './components/codeEditorSection/index';
import Nav from "./components/nav/index"
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <CodeEditor></CodeEditor>
    </div>
  );
}

export default App;
