import './App.css';
import Contact from './Componentes/Contact';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Projects from './Componentes/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
