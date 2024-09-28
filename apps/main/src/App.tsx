import "./App.css";
import { default as Counter2 } from "@repo/ui/counter2";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <MainPage />
      <h1>Vite + React</h1>
      <Counter2 />
    </>
  );
}

export default App;
