import ContainerBox from "@repo/ui/ContainerBox";
import useCounterStore2 from "../store/CounterStore";
import { Typography } from "@mui/material";
import useCounterStore1 from "app1/useCounterStore1";
import Button from "@repo/ui/Button";

const Counter2 = () => {
  const counterStore2 = useCounterStore2();
  const counterStore1 = useCounterStore1();

  return (
    <>
      <ContainerBox className="card-counter2">
        <Typography>Counter2 count:{counterStore2.count}</Typography>
        <ContainerBox direction="row" justifyContent={"center"}>
          <Button variant="outlined" onClick={counterStore2.increase}>
            increase
          </Button>
          <Button variant="outlined" onClick={counterStore2.decrease}>
            decrease
          </Button>
          <Button variant="outlined" onClick={counterStore2.reset}>
            reset
          </Button>
          <Button variant="outlined" onClick={counterStore1.reset}>
            reset counter1
          </Button>
        </ContainerBox>
      </ContainerBox>
    </>
  );
};

export default Counter2;
