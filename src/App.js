import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
