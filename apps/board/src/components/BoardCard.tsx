import { Card, CardContent } from "@mui/material";
import ContainerBox from "@repo/ui/ContainerBox";
import { MRT_Localization_KO as locale_ko } from "material-react-table/locales/ko";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
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
  const data = [
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
          <MaterialReactTable columns={columns} data={data} localization={localization} />
        </ContainerBox>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
