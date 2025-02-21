import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
