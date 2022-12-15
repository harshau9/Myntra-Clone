
import { Allroutes } from "./components/Routes/Allroutes";

import "./App.css";
import { ProductPageApi } from "./pages/ProductPageFetch/ProductPageApi";

function App() {
  return (
    <div className="App">

      {/* <Allroutes /> */}

      <ProductPageApi />

    </div>
  );
}

export default App;
