import Introduccion from './components/Introducción/Introduccion';
import AboutAs from './components/AboutAs/AboutAs';
import Arrangement from './components/Arrangement/Arrangement';
import Contact from './components/Contact/Contact';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Introduccion />
      <AboutAs />
      <Arrangement />
      <Contact />
    </div>
  );
}

export default App;
