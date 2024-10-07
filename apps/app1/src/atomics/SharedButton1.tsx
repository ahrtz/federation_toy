import Button from "@repo/ui/Button";
import { useCounterStore } from "@repo/ui/useCounterStore";

const SharedButton1 = () => {
  const counterStore = useCounterStore();
  console.log("증", counterStore);
  return (
    <Button variant="outlined" onClick={counterStore.increase}>
      increase
    </Button>
  );
};

export default SharedButton1;
