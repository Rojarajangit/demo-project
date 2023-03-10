import './App.css';
import Component from './Component';
import Component1 from './Component1';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Helloo!</h1>

      <Component/>
      <Component1/>
      <Component1/>

      <h3><Footer/></h3>
    </div>
  );
}

export default App;
