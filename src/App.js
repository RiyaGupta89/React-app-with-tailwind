import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-mono">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
