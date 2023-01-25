import { Allroutes } from "./Routes/Allroutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;
