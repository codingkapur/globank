import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
