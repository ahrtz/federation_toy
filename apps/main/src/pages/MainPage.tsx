import Tab from "@repo/ui/Tab";
import ContainerBox from "@repo/ui/ContainerBox";
import { Suspense, useMemo } from "react";
//@ts-ignore
import ResetCounter from "../components/ResetCounter";
import React from "react";

const Counter1 = React.lazy(() => import("app1/Counter1").catch(()=>{
  return <div>loading Error Counter1</div>
}));
//@ts-ignore
const Counter2 = React.lazy(() => import("board/Counter2").catch(()=>{
  return <div>loading Error Counter2</div>
}));
const BoardCard = React.lazy(() => import("board/BoardCard").catch(()=>{
  return <div>loading Error BoardCard</div>
}));
const MainPage = () => {
  
  const tabItems = useMemo(
    () => [
      {
        label: "홈-counter",
        component: (
          <ContainerBox>
            <Suspense fallback="1번 로딩">
            <Counter1 />
              
            </Suspense>
            <Suspense fallback="2번 로딩">
              
            {/* <Counter2 /> */}
            </Suspense>
            <ResetCounter />

          </ContainerBox>
        ),
      },
      {
        label: "게시판",
        component: (
          <Suspense>
            <p>test</p>
            {/* <BoardCard /> */}
          </Suspense>
        ),
      },
    ],
    []
  );
  return (
    <>
      <ContainerBox fullWidth flexWrap={"wrap"}>
        test
        <Tab tabItems={tabItems} fullWidth />
      </ContainerBox>
    </>
  );
};

export default MainPage;
