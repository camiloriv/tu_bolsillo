import './App.css';

// importar nuestros componentes
import { Show } from './components/views/Show';
import {Edit} from './components/views/Edit';
import {Create} from './components/views/Create';

//importamos el Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Show /> }></Route>
          <Route path='/create' element={ <Create /> }></Route>
          <Route path='/edit/:id' element={ <Edit /> }></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
