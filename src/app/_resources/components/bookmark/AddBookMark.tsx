import React, { useState } from "react";
import {
  CustomDialogClose,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@components/dialog";

type ChildrenType = React.FC<{
  close: () => void;
  open: () => void;
}>;

const AddBookMark: React.FC<{
  children: ChildrenType;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>{children({ close, open })}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay onClick={close} /> {/* Background overlay สีดำ ๆ  */}
        <DialogContent>
          <CustomDialogClose onClick={close} />
          {/* Decoupling กากบาทปิด Dialog ออกมา */}
          <DialogHeader>
            <DialogTitle>สร้างที่คั่นใหม่ ✨</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddBookMark;
