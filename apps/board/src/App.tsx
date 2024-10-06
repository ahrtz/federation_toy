import React from "react";
import "./App.css";
import Counter2 from "./components/Counter2";
import BoardListPage from "./pages/BoardListPage";


const Counter1 = React.lazy(() => import("app1/Counter1"));

function App() {
  return (
    <>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <BoardListPage />
      <Counter2 />
      <Counter1 />
    </>
  );
}

export default App;
