import "./App.css";

import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./routes/index";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <div>dkdkdkdkdk</div>
      <BrowserRouter>
        <RenderRoutes />
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
