import Button from "@repo/ui/Button";

import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  styled,
} from "@mui/material";
import React, { useRef } from "react";
import SystemIconButton from "./SystemIconButton";
import useExceededHeight from "../hooks/exceededHeight";

export interface StyledBaseDialogProps {
  size?: "large" | "medium" | "small" | "chattings" | "chatting";
}

export type BaseDialogProps = Omit<
  DialogProps,
  "fullScreen" | "maxWidth" | "onClose" | "fullWidth" | "title"
> &
  StyledBaseDialogProps & {
    open: boolean;
    useCloseButton?: boolean;
    withoutCancel?: boolean;
    confirmText?: string;
    cancelText?: string;
    onClose?: (confirmed?: boolean) => void;
    actions?: React.ReactNode[];
    noAction?: boolean;
    title?: React.ReactNode;
    disabledConfirmButton?: boolean;
    disableBackdropClickClose?: boolean;
    disableEscapeKeyDownClose?: boolean;
  };

const StyledBaseDialog = styled(Dialog, {
  name: "BaseDialog",
  slot: "Root",
  shouldForwardProp: (prop: string) => prop !== "size",
})<StyledBaseDialogProps>({});

const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  useCloseButton = false,
  withoutCancel,
  confirmText: confirmTextProp,
  cancelText: cancelTextProp,
  onClose,
  actions,
  children,
  size = "medium",
  title,
  noAction = false,
  disabledConfirmButton = false,
  disableBackdropClickClose,
  disableEscapeKeyDownClose,
  ...props
}) => {
  const confirmText = confirmTextProp ?? "확인";
  const cancelText = cancelTextProp ?? "취소";
  const contentRef = useRef<HTMLDivElement>(null);
  const exceededHeight = useExceededHeight(open, contentRef);

  return (
    <StyledBaseDialog
      open={open}
      onClose={(_, reason) => {
        if (
          (reason === "backdropClick" && disableBackdropClickClose) ||
          (reason === "escapeKeyDown" && disableEscapeKeyDownClose)
        ) {
          return;
        }
        onClose?.();
      }}
      size={size}
      PaperProps={{ tabIndex: -1 }}
      {...props}
    >
      {useCloseButton && (
        <DialogTitle>
          {title}
          <SystemIconButton
            onClick={() => {
              onClose?.();
            }}
            className="base-dialog-close-button"
            aria-label="닫기"
          >
            <CloseIcon />
          </SystemIconButton>
        </DialogTitle>
      )}
      {exceededHeight ? (
        <DialogContent>
          <div ref={contentRef}>{children}</div>
        </DialogContent>
      ) : (
        <DialogContent>
          <div ref={contentRef}>{children}</div>
        </DialogContent>
      )}
      {!noAction && (
        <DialogActions >
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
                  disabled={disabledConfirmButton}
                >
                  {confirmText}
                </Button>
              </>
            ))}
        </DialogActions>
      )}
    </StyledBaseDialog>
  );
};

export default BaseDialog;
