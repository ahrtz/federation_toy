import "./App.css";
import { default as Counter2 } from "@repo/ui/counter2";
import Button from "@repo/ui/Button";

import { lazy, Suspense, useEffect, useState } from "react";

// import SignupDialog from "app1/SignUpDialog";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Remote = lazy(
    //@ts-ignore
    async () => import("app1/SignUpDialog")
  );
  const SignUpPage = lazy(async () => import("app1/SignUpPage"));
  useEffect(() => {
    console.log(2222222, isOpen);
    console.log(Remote);
  }, [isOpen]);
  return (
    <>
      <h1>Vite + React</h1>
      <Counter2 />
      <Button onClick={() => setIsOpen(true)} disabled={false}>
        버튼11111
      </Button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback="loading...">
        <Remote isOpen={isOpen} closeFunc={() => setIsOpen(false)} />
      </Suspense>
      <SignUpPage />
    </>
  );
}

export default App;
