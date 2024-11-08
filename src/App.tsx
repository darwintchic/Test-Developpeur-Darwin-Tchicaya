import {Routes,Route} from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import VentesPage from './pages/ventesPage';
import OverviewPage from './pages/overviewPage';
function App() {


  return (
  
    <Routes>
     <Route path='/' element={<VentesPage/>} />
     <Route path='/overview' element={<OverviewPage/>} />
    </Routes>


  )
}

export default App
