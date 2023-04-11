import './App.css';
import ModalSugerencias from './components/modals/m_sugerencias';
import Index from './components/views';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index/>}/>
        <Route path="/src/components/modals/m_sugerencias.js" element={<ModalSugerencias/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
