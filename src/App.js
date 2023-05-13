import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Show from './components/views/Show';
import Index from '../src/components/views/index'
import './sass/main.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path="/show" element={<Show/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
