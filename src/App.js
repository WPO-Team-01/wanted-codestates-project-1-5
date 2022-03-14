import "./App.css";
import Clothes from "./components/Clothes";
import Regions from "./components/Regions";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Clothes />
      <Regions />
      {/* <Main /> */}
    </div>
  );
}

export default App;
