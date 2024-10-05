import Tab from "@repo/ui/Tab";

import BoardCard from "board/BoardCard";
import ContainerBox from "@repo/ui/ContainerBox";
import { Suspense, useMemo } from "react";

import Counter1 from "app1/Counter1";
import Counter2 from "board/Counter2";
import ResetCounter from "../components/ResetCounter";

const MainPage = () => {
  const tabItems = useMemo(
    () => [
      {
        label: "홈-counter",
        component: (
          <ContainerBox>
            <Counter1 />
            <Counter2 />
            <ResetCounter />
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
    </>
  );
};

export default MainPage;
