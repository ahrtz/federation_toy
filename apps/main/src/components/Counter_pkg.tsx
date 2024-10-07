import Typography from "@mui/material/Typography";
import Button from "@repo/ui/Button";
import ContainerBox from "@repo/ui/ContainerBox";
import { useCounterStore } from "@repo/ui/useCounterStore";
import React from "react";

const SharedButton1 = React.lazy(() => import("app1/SharedButton1"));
const SharedButton2 = React.lazy(() => import("board/SharedButton2"));

const Counter_pkg = () => {
  const counterStore = useCounterStore();
  console.log("pkg", counterStore);
  return (
    <ContainerBox className="card-counter3">
      <Typography>Counter_pkg count:{counterStore.count} (실패)</Typography>
      <ContainerBox direction="row" justifyContent={"center"}>
        <SharedButton1 />
        <SharedButton2 />
        <Button variant="outlined" onClick={counterStore.increase}>
          증가
        </Button>
        <Button variant="outlined" onClick={counterStore.decrease}>
          감소
        </Button>
        <Button variant="outlined" onClick={counterStore.reset}>
          reset
        </Button>
        <Button variant="outlined" onClick={() => console.log(counterStore)}>
          check
        </Button>
      </ContainerBox>
    </ContainerBox>
  );
};

export default Counter_pkg;
