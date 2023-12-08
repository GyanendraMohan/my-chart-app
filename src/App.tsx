
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import SingleProduct from "./pages/product/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
