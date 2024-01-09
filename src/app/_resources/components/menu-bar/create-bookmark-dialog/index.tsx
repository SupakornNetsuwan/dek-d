import React, { useState } from "react";
import CreateBookMarkProvider from "./providers/CreateBookMarkProvider";
import {
  CustomDialogClose,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@components/dialog";
import CreateBookMarkForm from "./form";

type ChildrenType = React.FC<{
  close: () => void;
  open: () => void;
}>;

const CreateBookmarkDialog: React.FC<{
  children: ChildrenType;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>{children({ close, open })}</DialogTrigger>
      <DialogPortal>
        {/* Background overlay สีดำ ๆ  */}
        <DialogOverlay onClick={close} />
        <DialogContent className="w-[90vw] max-h-[80dvh] overflow-y-auto">
          {/* Decoupling กากบาทปิด Dialog ออกมา */}
          <CustomDialogClose onClick={close} />
          <DialogHeader>
            <DialogTitle>สร้างที่คั่นใหม่ ✨</DialogTitle>
            <DialogDescription>
              ที่คั่นหนังสือช่วยให้คุณสามารถกลับมาอ่านหนังสือ ณ
              จุดเดิมที่คั่นไว้ได้โดยไม่ต้องจำชื่อบท ชื่อตอน หรือ เลขหน้า
            </DialogDescription>
          </DialogHeader>
          <CreateBookMarkProvider closeDialog={close}>
            <CreateBookMarkForm />
          </CreateBookMarkProvider>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CreateBookmarkDialog;