import { useState } from "react";
import "./App.css";
import SignupDialog from "./components/SignupDialog";
import SignUpPage from "./pages/SignUpPage";

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
      <button onClick={handleClick}></button>
      <SignupDialog isOpen={isOpen} closeFunc={() => setIsOpen(false)} />
      <SignUpPage />
    </>
  );
}

export default App;
