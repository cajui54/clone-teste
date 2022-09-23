import ScreenLogin from "./pages/ScreenLogin";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScreenLogin/>}/>
          <Route path='/main' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
