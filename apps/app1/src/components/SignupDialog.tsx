import { TextField } from "@mui/material";
import BaseFullDialog from "@repo/ui/BaseFullDialog";
import { useEffect } from "react";

interface SignUpDialogProps {
  isOpen: boolean;
  closeFunc: () => void;
}

const SignUpDialog: React.FC<SignUpDialogProps> = ({ isOpen, closeFunc }) => {
  useEffect(() => {
    console.log(111111, isOpen);
    console.log(closeFunc);
  }, [isOpen]);
  return (
    <>
      <div>12341212312</div>
      <BaseFullDialog
        open={isOpen}
        useCloseButton={false}
        onClose={() => closeFunc()}
      >
        회원가입입입이빙빕
        <TextField id="ID" label={"id"} defaultValue={isOpen} />
      </BaseFullDialog>
    </>
  );
};

export default SignUpDialog;
