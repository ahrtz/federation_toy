import { Stack, styled } from "@mui/material";

export type ContainerBoxProps = {
  backgroundColor?: string;
  fullWidth?: boolean;
  childrenSize?: (null | number)[];
  alignItems?: string;
  justifyContent?: string;
  component?: React.ElementType;
};

const ContainerBox = styled(Stack, {
  name: "ContainerBox",
  slot: "Root",
  shouldForwardProp: (prop: string) =>
    !["backgroundColor", "fullWidth", "childrenSize", "alignItems"].includes(
      prop
    ),
})<ContainerBoxProps>({});

ContainerBox.defaultProps = {
  ...ContainerBox.defaultProps,
  gap: 1,
};

export default ContainerBox;
