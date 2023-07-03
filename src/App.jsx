import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Starred from './pages/starred';
import Mainlayout from './components/mainlayout';
import Show from './pages/show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Globalstyle } from './theme';
const queryClient = new QueryClient()

  
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Globalstyle>
    <HashRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        
          
        </Route>
     
        <Route path="/show/:showId"element={<Show />}/>
       
      </Routes>
      
    </HashRouter>
    </Globalstyle>
      </QueryClientProvider>
  );
}

export default App;
