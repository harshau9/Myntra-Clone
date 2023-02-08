import { ThemeContext } from "./pages/ThemeContext/ThemeContext";
import { useContext } from "react";
import { Allroutes } from "./Routes/Allroutes";
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div id={theme}>
      <Allroutes />
    </div>
  );
}

export default App;
