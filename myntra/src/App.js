import './App.css';
import Hotel from './pages/Home&Hotels/Hotel';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Update from './pages/Home&Hotels/Update';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<Hotel />} />
      </Routes> */}
      {/* <Update /> */}
      <Hotel />
    </div>
  );
}

export default App;
