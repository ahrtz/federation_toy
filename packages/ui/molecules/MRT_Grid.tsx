import {
  PaginationItem,
  PaginationRenderItemParams,
  styled,
} from "@mui/material";

import {
  MRT_Localization,
  MRT_RowData,
  MRT_TableOptions,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import { OnChangeFn, PaginationState } from "@tanstack/react-table";

const StyledDataGrid = styled("div", {
  name: "DataGrid",
  slot: "Root",
})({});
type Key = string;

interface MRT_GridProps<TData extends MRT_RowData>
  extends MRT_TableOptions<TData> {
  id?: Key;
  className?: string;
  rowId: keyof TData;
  localization?: Partial<MRT_Localization>;
  setPagination?: OnChangeFn<PaginationState>;
  isLoading?: boolean;
  zebra?: boolean;
}

const MRT_Grid = <TData extends MRT_RowData>(props: MRT_GridProps<TData>) => {
  const {
    // custom props
    id,
    className,
    rowId,
    setPagination,
    localization,
    isLoading,
    zebra = true,
    // default props
    state,
    enableTopToolbar = false,
    enableTableHead = true,
    enableColumnActions = false,
    enableColumnFilters = false,
    enableColumnFilterModes = false,
    enableSorting = false,
    enablePagination = true,
    manualPagination = true,
    // additional props
    ...rest
  } = props;

  const table = useMaterialReactTable<TData>({
    // options
    enableTopToolbar: enableTopToolbar,
    enableTableHead: enableTableHead,
    enableColumnActions: enableColumnActions,
    enableColumnFilters: enableColumnFilters,
    enableColumnFilterModes: enableColumnFilterModes,
    enableSorting: enableSorting,

    state: {
      isLoading,
      ...state,
    },

    // pagination
    enablePagination: enablePagination,
    enableBottomToolbar: enablePagination,
    manualPagination: manualPagination,
    autoResetPageIndex: false, // issue:
    paginationDisplayMode: "pages",
    onPaginationChange: setPagination,
    positionPagination: "bottom",
    muiPaginationProps: {
      showRowsPerPage: false,
      boundaryCount: 5,
      getItemAriaLabel: (type, _page, _selected) => {
        switch (type) {
          case "first":
          case "previous":
          case "next":
          case "last":
            return "마지막";
          case "page":
            return "~";
          default:
            return "";
        }
      },
      renderItem: (params: PaginationRenderItemParams) => (
        <PaginationItem {...params} aria-current={undefined} />
      ),
    },
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: ({}) => ({
      align: "center",
    }),
    localization: localization,
    ...rest,
  });

  return (
    <StyledDataGrid key={id} className={`${className} DataGrid-table`}>
      <MaterialReactTable table={table} />
    </StyledDataGrid>
  );
};

export default MRT_Grid;
