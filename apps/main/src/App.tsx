import "./App.css";

import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./routes";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <RenderRoutes />
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
