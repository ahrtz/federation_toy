import Button from "@repo/ui/Button";
import ContainerBox from "@repo/ui/ContainerBox";
import counterStore1 from "app1/counterStore";
import counterStore2 from "board/CounterStore";

const ResetCounter = () => {
  const counter1Store = counterStore1();
  const counter2Store = counterStore2();
  return (
    <ContainerBox>
      <Button
        variant="outlined"
        onClick={counter1Store.reset}
        color="secondary"
      >
        Counter 1 Reset{" "}
      </Button>
      <Button
        variant="outlined"
        onClick={counter2Store.reset}
        color="secondary"
      >
        Counter 2 Reset{" "}
      </Button>
    </ContainerBox>
  );
};
export default ResetCounter;
