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
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";
import { Button } from "@/core/components/ui/button";

type ChildrenType = React.FC<{
  close: () => void;
  open: () => void;
}>;

const EditBookmarkDialog: React.FC<{
  children: ChildrenType;
  bookmarkId: string;
}> = ({ children, bookmarkId }) => {

  const [isOpen, setIsOpen] = useState(false);
  const { deleteBookmark } = useBookmarkStorageAtom();

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <Dialog open={isOpen} >
      <DialogTrigger asChild>{children({ close, open })}</DialogTrigger>
      <DialogPortal>
        {/* Background overlay สีดำ ๆ  */}
        <DialogOverlay onClick={close} />
        <DialogContent className="max-h-[80dvh] w-[90vw] max-w-[30em] overflow-y-auto">
          {/* Decoupling กากบาทปิด Dialog ออกมา */}
          <CustomDialogClose onClick={close} />
          <DialogHeader>
            <DialogTitle className="text-slate-800">แก้ไขที่คั่นหนังสือ</DialogTitle>
            <DialogDescription>
              แก้ไขข้อมูลที่คั่นหนังสือเดิมในคลัง
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-x-1">
           
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default EditBookmarkDialog;
