import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/clothes/productsSlice";
import { getRegions } from "./redux/clothes/regionsSlice";
import Clothes from "./components/Clothes";
import Regions from "./components/Regions";
import Main from "./pages/Main";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const regions = useSelector((state) => state.regions);

  useEffect(() => {
    !products.data && dispatch(getProducts());
    !regions.data && dispatch(getRegions());
  }, []);

  return (
    <div className="App">
      <Clothes />
      <Regions />
      {/* <Main /> */}
    </div>
  );
}

export default App;
