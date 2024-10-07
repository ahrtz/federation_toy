import Tab from "@repo/ui/Tab";

import BoardCard from "board/BoardCard";
import ContainerBox from "@repo/ui/ContainerBox";
import { Suspense, useMemo, useState } from "react";

import Counter1 from "app1/Counter1";
import Counter2 from "board/Counter2";

import ResetCounter from "../components/ResetCounter";
import Counter_pkg from "../components/Counter_pkg";

import CounterUi from "@repo/ui/CounterUi";
import Counter3 from "@repo/ui/Counter3";

const MainPage = () => {
  const [count, setCount] = useState(0);

  const tabItems = useMemo(
    () => [
      {
        label: "홈-counter",
        component: (
          <ContainerBox>
            <Counter1 />
            <Counter2 />
            <ResetCounter />
            <Counter_pkg />
            <CounterUi />
          </ContainerBox>
        ),
      },
      {
        label: "게시판",
        component: (
          <Suspense>
            <BoardCard />
          </Suspense>
        ),
      },
    ],
    []
  );
  return (
    <>
      <ContainerBox fullWidth flexWrap={"wrap"}>
        <Tab tabItems={tabItems} fullWidth />
      </ContainerBox>
      <Counter3
        count={count}
        increase={() => setCount(count + 2)}
        decrease={() => setCount(count - 2)}
        reset={() => setCount(0)}
      />
    </>
  );
};

export default MainPage;
