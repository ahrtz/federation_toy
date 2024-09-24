import Button from "@repo/ui/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  styled,
} from "@mui/material";
import { BaseDialogProps } from "./BaseDialog";
import { useRef } from "react";
import useExceededHeight from "../hooks/exceededHeight";
import SystemIconButton from "./SystemIconButton";
import CloseIcon from "@mui/icons-material/Close";

export type BaseFullDialogProps = Omit<BaseDialogProps, "size" | "title"> &
  Pick<DialogProps, "title"> & { noAction?: boolean };

export interface StyledBaseFullDialogSize {
  contentSize?: "large" | "medium" | "full";
}

const StyledBaseFullDialog = styled(Dialog, {
  name: "BaseFullDialog",
  slot: "Root",
  shouldForwardProp: (prop: string) => prop !== "contentSize",
})<StyledBaseFullDialogSize>({});

const BaseFullDialog: React.FC<
  BaseFullDialogProps & StyledBaseFullDialogSize
> = ({
  open,
  useCloseButton,
  withoutCancel,
  confirmText: confirmTextProp,
  cancelText: cancelTextProp,
  onClose,
  actions,
  children,
  noAction,
  contentSize = "large",
  ...props
}) => {
  const confirmText = confirmTextProp ?? "확인";
  const cancelText = cancelTextProp ?? "취소";
  const contentRef = useRef<HTMLDivElement>(null);
  const exceededHeight = useExceededHeight(open, contentRef);

  return (
    <StyledBaseFullDialog
      open={open}
      onClose={() => {
        onClose?.();
      }}
      fullScreen
      {...props}
      contentSize={contentSize}
      aria-labelledby="dialogTitle"
    >
      {useCloseButton && (
        <SystemIconButton
          onClick={() => {
            onClose?.();
          }}
          className="base-full-dialog-close-button"
          aria-label="닫기"
        >
          <CloseIcon />
        </SystemIconButton>
      )}
      {exceededHeight ? (
        <DialogContent tabIndex={0}>
          <div ref={contentRef} className="base-full-dialog-contents">
            {children}
          </div>
        </DialogContent>
      ) : (
        <DialogContent>
          <div ref={contentRef} className="base-full-dialog-contents">
            {children}
          </div>
        </DialogContent>
      )}

      {!noAction && (
        <DialogActions className={exceededHeight ? "hasLine" : ""}>
          {actions ??
            (withoutCancel ? (
              <Button
                onClick={() => {
                  onClose?.(true);
                }}
                variant="text"
              >
                {confirmText}
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    onClose?.(false);
                  }}
                  variant="text"
                >
                  {cancelText}
                </Button>
                <Button
                  onClick={() => {
                    onClose?.(true);
                  }}
                  variant="text"
                >
                  {confirmText}
                </Button>
              </>
            ))}
        </DialogActions>
      )}
    </StyledBaseFullDialog>
  );
};

export default BaseFullDialog;
