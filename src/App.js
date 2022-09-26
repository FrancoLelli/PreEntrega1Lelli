import './App.css';
import NavBar from './componentes/navbar/navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
  <div className='app'>
    <NavBar />
    <ItemListContainer greeting='BIENVENIDOS!' />
  </div>
  );
}

export default App;
