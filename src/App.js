import "./App.css";
import ProductPage from "./pages/ProductPage";
import KeywordPage from "./pages/KeywordPage";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Intro from "./pages/Intro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<KeywordPage />} />
        <Route path="/regions" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
