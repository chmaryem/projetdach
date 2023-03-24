
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Cal from './pages/Calendar/Calendar';
import { Route,BrowserRouter, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Bo from './pages/Board/Board';
function App() {
  return (
    <BrowserRouter>
   <Routes>

    <Route path="/" element={(<Dashboard/>)} />
    <Route path="/Calendar" element={(<Cal/>)} />
    <Route path="/Board" element={(<Bo/>)} />  
        </Routes>
        </BrowserRouter>
   
  );
}

export default App;
