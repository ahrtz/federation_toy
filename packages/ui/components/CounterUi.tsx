import ContainerBox from "@repo/ui/ContainerBox";
import useCounterStore from "../store/useCounterStore";
import { Typography } from "@mui/material";
import Button from "@repo/ui/Button";

const CounterUi = () => {
  const counterStore = useCounterStore();

  return (
    <>
      <ContainerBox className="card-counter2">
        <Typography>
          CounterUi count:{counterStore.count}(store from ui)
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
          <Button variant="outlined" onClick={counterStore.reset}>
            reset counter1
          </Button>
        </ContainerBox>
      </ContainerBox>
    </>
  );
};

export default CounterUi;
