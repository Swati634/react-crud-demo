import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Component/Read";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
