import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const welcomeMessage = '¡Hola mundo!'

  const styleH2 = {
    color: 'plum'
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">{welcomeMessage}</h1>
      <h2 style={styleH2}>React!!! WUHUUU!!!</h2>
      <ItemListContainer greeting='Manuel'></ItemListContainer>
    </div>
  );
}

export default App;