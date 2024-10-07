import Button from "@repo/ui/Button";
import { useCounterStore } from "@repo/ui/useCounterStore";

const SharedButton2 = (temp: string) => {
  const counterStore = useCounterStore();
  console.log(11111, counterStore, temp);
  return (
    <Button variant="outlined" onClick={counterStore.decrease}>
      decrease
    </Button>
  );
};

export default SharedButton2;
