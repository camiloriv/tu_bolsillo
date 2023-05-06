import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Show from './components/views/Show';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/show" element={Show}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
