import "./App.css";
import ProductPage from "./pages/ProductPage";
import KeywordPage from "./pages/KeywordPage";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/clothes/productsSlice";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { getRegions } from "./redux/clothes/regionsSlice";

function App() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);
  // const regions = useSelector((state) => state.regions);

  // useEffect(() => {
  //   !products.data && dispatch(getProducts());
  //   !regions.data && dispatch(getRegions());
  // }, []);

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
