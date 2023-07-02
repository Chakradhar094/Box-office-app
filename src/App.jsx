import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Starred from './pages/starred';
import Mainlayout from './components/mainlayout';
import Show from './pages/show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

  
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        
          
        </Route>
     
        <Route path="/show/:showId"element={<Show />}/>
       
      </Routes>
      
    </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
