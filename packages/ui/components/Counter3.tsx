import Button from "@repo/ui/Button";
import ContainerBox from "@repo/ui/ContainerBox";
import { Typography } from "@mui/material";

const Counter3 = ({
  count,
  increase,
  decrease,
  reset,
}: {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}) => {
  return (
    <>
      <ContainerBox className="card-counter4">
        <Typography>Counter3 count:{count} with props</Typography>
        <ContainerBox direction="row" justifyContent={"center"}>
          <Button variant="outlined" onClick={() => increase()}>
            increase
          </Button>
          <Button variant="outlined" onClick={() => decrease()}>
            decrease
          </Button>
          <Button variant="outlined" onClick={() => reset()}>
            reset
          </Button>
          <Button variant="outlined" onClick={reset}>
            reset counter3
          </Button>
        </ContainerBox>
      </ContainerBox>
    </>
  );
};
export default Counter3;
