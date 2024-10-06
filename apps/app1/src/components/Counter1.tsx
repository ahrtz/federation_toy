import ContainerBox from "@repo/ui/ContainerBox";
import useCounterStore1 from "../store/counterStore";
import { Typography } from "@mui/material";
//@ts-ignore
import useCounterStore2 from "board/useCounterStore2";
import Button from "@repo/ui/Button";
const counterStore2 =async ()=> await import("board/useCounterStore2")
.then((module) => {
  console.log("Loaded remote CounterStore:", module);
  return module.default
})
.catch((error) => {
  console.error("Failed to load board/useCounterStore2:", error);
});

const Counter1 = () => {
  const counterStore1 = useCounterStore1();
  // const counterStore2 = useCounterStore2();
  return (
    <>
      <ContainerBox className="card-counter1" border={""}>
        <Typography>Counter1 count:{counterStore1.count}</Typography>
        <ContainerBox direction="row" justifyContent={"center"}>
          <Button variant="outlined" onClick={counterStore1.increase}>
            increase
          </Button>
          <Button variant="outlined" onClick={counterStore1.decrease}>
            decrease
          </Button>
          <Button variant="outlined" onClick={counterStore1.reset}>
            reset
          </Button>
          
          <Button variant="outlined" 
          //@ts-ignore
          onClick={counterStore2.reset}>
            reset counter2
          </Button>
        </ContainerBox>
      </ContainerBox>
    </>
  );
};

export default Counter1;
