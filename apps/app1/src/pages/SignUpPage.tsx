import { TextField } from "@mui/material";
import Button from "@repo/ui/Button";
import { useState } from "react";
import SignUpDialog from "../components/SignupDialog";

const SignUpPage = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <TextField fullWidth label="id" />
      <TextField fullWidth label="pwd" />
      <Button onClick={() => alert("login")}>로그인</Button>
      <Button onClick={() => setIsOpen(true)}>회원가입</Button>
      <SignUpDialog isOpen={open} closeFunc={() => setIsOpen(false)} />
    </>
  );
};

export default SignUpPage;
