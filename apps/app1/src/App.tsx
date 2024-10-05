import { Suspense, useState } from "react";
import "./App.css";
import SignupDialog from "./components/SignupDialog";
import SignUpPage from "./pages/SignUpPage";
import Counter1 from "./components/Counter1";
import React from "react";

const Counter2 = React.lazy(() => import("board/Counter2"));

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => {
      const next = !prev;
      return next;
    });
  };

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter1 />
      <Suspense fallback={<>loading...</>}>
        <Counter2 />
      </Suspense>
      <button onClick={handleClick}></button>
      <SignupDialog isOpen={isOpen} closeFunc={() => setIsOpen(false)} />
      <SignUpPage />
    </>
  );
}

export default App;
