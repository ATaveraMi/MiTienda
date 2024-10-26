import NavBar from './components/NavBar.jsx';
import { Route, Routes } from "react-router-dom";
import InventoryPage from './pages/InventoryPage.jsx';
import SellPage from './pages/SellPage.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="" element={<InventoryPage/>}/>
        <Route path="/vender" element={<SellPage/>}/>
      </Routes>
    </>
  )
}

export default App
