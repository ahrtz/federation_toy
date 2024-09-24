import { Button as MuiButton, styled } from "@mui/material";

export interface StyledButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const Button = styled(MuiButton, {
  name: "Button",
  slot: "Root",
  shouldForwardProp: (prop: string) => prop !== "width",
})<StyledButtonProps>({});

export default Button;
