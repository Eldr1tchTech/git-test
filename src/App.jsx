import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Hochzeiten from './pages/Hochzeiten.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hochzeiten' element={<Hochzeiten />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
