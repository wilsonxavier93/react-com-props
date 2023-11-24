import './App.css';
import Contact from './Componentes/Contact';
import ContadorClick from './Componentes/ContadorClick';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Hellouser from './Componentes/HelloUser';
import Projects from './Componentes/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContadorClick></ContadorClick>
      <Hellouser></Hellouser>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
