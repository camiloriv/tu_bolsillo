import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Show from './components/views/Show';
import './sass/main.css';
import Index from './components/views/index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={Index}/>
        <Route path="/show" element={Show}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
