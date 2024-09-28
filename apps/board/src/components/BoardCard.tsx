import { Card, CardContent } from "@mui/material";
import ContainerBox from "@repo/ui/ContainerBox";
import MRT_Grid from "@repo/ui/MRT_grid";
import { MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_KO as locale_ko } from "material-react-table/locales/ko";
import { useMemo } from "react";

interface BoardCardProps {
  id: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ id }) => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "id",
        header: "게시글 번호",
        maxSize: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: "name",
        header: "제목",
        maxSize: 50,
        Cell: ({ renderedCellValue }) => {
          return `${renderedCellValue}`;
        },
      },
      {
        accessorKey: "registerName",
        header: "작성자",
        maxSize: 50,
        Cell: ({ renderedCellValue }) => {
          return `${renderedCellValue}`;
        },
      },
      {
        accessorKey: "registerDate",
        header: "작성일시",
        maxSize: 50,
        Cell: ({ renderedCellValue }) => {
          return `${renderedCellValue}`;
        },
      },
    ],
    []
  );
  const boardData = [
    {
      id: 1,
      name: "test",
      registerName: "test",
      registerDate: "2023-03-03",
    },
    {
      id: 2,
      name: "test2",
      registerName: "test",
      registerDate: "2023-03-03",
    },
    {
      id: 3,
      name: "test3",
      registerName: "test",
      registerDate: "2023-03-03",
    },
  ];
  const localization = Object.assign(locale_ko, {
    noRecordsToDisplay: "게시글이 없습니다.",
  });
  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <ContainerBox fullWidth>
          <MRT_Grid
            key={`Board-${id}`}
            columns={columns}
            data={boardData}
            state={{
              columnVisibility: {
                "mrt-row-pin": false,
              },
            }}
            enablePagination={false}
            rowId={"id"}
            getRowId={(row) => String(row.id)}
            localization={localization}
            className={""}
          />
        </ContainerBox>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
