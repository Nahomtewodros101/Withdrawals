import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
function App() {
  return (
    <div className="min-h-screen bg-custom-gray bg-custom-pattern">
      <Navbar />
      <Hero />
      <Products />
      <About />
    </div>
  );
}

export default App;
