import Button from "@repo/ui/Button";
import ContainerBox from "@repo/ui/ContainerBox";
//@ts-ignore
import useCounterStore1 from "app1/useCounterStore1";
import useCounterStore2 from "board/useCounterStore2";
const counter1Store =async ()=> await import("app1/useCounterStore1")
              .then((module) => {
                console.log("Loaded remote CounterStore:", module);
               return module.default
              })
              .catch((error) => {
                console.error("Failed to load app1/counterStore:", error);
              });
const counter2Store =async ()=> await import("board/useCounterStore2")
.then((module) => {
  console.log("Loaded remote CounterStore:", module);
  return module.default
})
.catch((error) => {
  console.error("Failed to load board/useCounterStore2:", error);
});

const ResetCounter = () => {
  return (
    <ContainerBox>
      <Button
        variant="outlined"
        //@ts-ignore
        onClick={counter1Store.reset}
        color="secondary"
      >
        Counter 1 Reset{" "}
      </Button>
      <Button
        variant="outlined"
        //@ts-ignore
        onClick={counter2Store.reset}
        color="secondary"
      >
        Counter 2 Reset{" "}
      </Button>
    </ContainerBox>
  );
};
export default ResetCounter;
