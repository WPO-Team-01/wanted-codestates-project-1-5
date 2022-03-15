import "./App.css";
import ProductPage from "./pages/ProductPage";
import KeywordPage from "./pages/KeywordPage";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<KeywordPage />} />
        <Route path="/regions" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
