
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Starred from "./pages/starred"
function App() {
  return (
    <BrowserRouter>
    <Routes>

      
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />
    
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
