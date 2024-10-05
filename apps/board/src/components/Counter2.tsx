import ContainerBox from "@repo/ui/ContainerBox";
import useCounterStore from "../store/CounterStore";
import { Typography } from "@mui/material";
import counterStore1 from "app1/counterStore";
import Button from "@repo/ui/Button";

const Counter2 = () => {
  const counterStore = useCounterStore();
  const counter1Store = counterStore1();

  return (
    <>
      <ContainerBox className="card-counter2">
        <Typography>Counter2 count:{counterStore.count}</Typography>
        <ContainerBox direction="row" justifyContent={"center"}>
          <Button variant="outlined" onClick={counterStore.increase}>
            increase
          </Button>
          <Button variant="outlined" onClick={counterStore.decrease}>
            decrease
          </Button>
          <Button variant="outlined" onClick={counterStore.reset}>
            reset
          </Button>
          <Button variant="outlined" onClick={counter1Store.reset}>
            reset counter1
          </Button>
        </ContainerBox>
      </ContainerBox>
    </>
  );
};

export default Counter2;
