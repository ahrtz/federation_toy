import Tab from "@repo/ui/Tab";
import { useMemo } from "react";

import BoardCard from "board/BoardCard"
import ContainerBox from "@repo/ui/ContainerBox";
import { Suspense } from "react";

const MainPage = () => {
  const tabItems = useMemo(
    () => [
      {
        label: "홈",
        component: <>이곳은 홈화면일지도? </>,
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
      tab
      <ContainerBox fullWidth flexWrap={"wrap"}>
        <Tab tabItems={tabItems} fullWidth/>
      </ContainerBox>
    </>
  );
};

export default MainPage;
