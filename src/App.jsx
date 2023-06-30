import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Starred from './pages/starred';
import Mainlayout from './components/mainlayout';
import Show from './pages/show';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path="/show/:showId"element={<Show />}>
        
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
