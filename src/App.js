import './App.css';
import NavBar from './componentes/navbar/navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
  <div className='app'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS!' />}/>
        <Route path='/category/:catId' element={<ItemListContainer />}/>
        <Route path='/detail/:productoId' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
