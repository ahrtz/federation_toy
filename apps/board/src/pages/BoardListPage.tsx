import { Typography } from "@mui/material";
import BoardCardPage from "../components/BoardCard";
import ContainerBox from "@repo/ui/ContainerBox";

const BoardListPage = () => {
  return (
    <>
      <Typography variant="h1">게시판 목록</Typography>
      <ContainerBox
        direction="row"
        gap={2}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        <BoardCardPage id="1" />
        <BoardCardPage id={"2"} />
        <BoardCardPage id={"3"} />
        <BoardCardPage id={"4"} />
      </ContainerBox>
    </>
  );
};

export default BoardListPage;
