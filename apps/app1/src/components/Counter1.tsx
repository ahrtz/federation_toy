import ContainerBox from "@repo/ui/ContainerBox";
import useCounterStore from "../store/counterStore";
import { Typography } from "@mui/material";
import counterStore2 from "board/CounterStore";
import Button from "@repo/ui/Button";
const Counter1 = () => {
  const counterStore = useCounterStore();
  const counter2Store = counterStore2();
  return (
    <>
      <ContainerBox className="card-counter1" border={""}>
        <Typography>
          Counter1 count:{counterStore.count} (store from counter2)
        </Typography>
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
          <Button variant="outlined" onClick={counter2Store.reset}>
            reset counter2
          </Button>
        </ContainerBox>
      </ContainerBox>
    </>
  );
};

export default Counter1;
