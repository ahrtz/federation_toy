import "./App.css";
import { default as Counter2 } from "@repo/ui/counter2";

import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./routes";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
    <BrowserRouter>
      <RenderRoutes/>
      <BottomNav />
    </BrowserRouter>
      
      <Counter2 />
    </>
  );
}

export default App;
