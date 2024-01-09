import React, { useState } from "react";
import {
  Dialog,
  CustomDialogClose,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
  DialogHeader,
} from "@components/dialog";

type DialogActionsType = React.FC<{
  close: () => void;
  open: () => void;
}>;

const CustomDialog: React.FC<{
  children: DialogActionsType;
  render: DialogActionsType;
  title?: string;
  description?: string;
}> = ({ children, render, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>{children({ close, open })}</DialogTrigger>
      <DialogPortal>
        {/* Background overlay สีดำ ๆ  */}
        <DialogOverlay onClick={close} />
        <DialogContent className="max-h-[80dvh] w-[90vw] overflow-y-auto">
          {/* Decoupling กากบาทปิด Dialog ออกมา */}
          <CustomDialogClose onClick={close} />
          <DialogHeader>
            {title && (
              <DialogTitle className="text-slate-800">{title}</DialogTitle>
            )}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {render({ close, open })}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CustomDialog;
