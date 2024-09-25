import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
function App() {
  return (
    <div className="min-h-screen bg-custom-gray bg-custom-pattern">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
