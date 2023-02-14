import './App.css';
import Table from "./routes/Table";
import {tableEntries} from "./utils/GeneralUtils";



function App() {
  return (
    <div className="App">
      <Table trades={tableEntries}/>
    </div>
  );
}

export default App;
