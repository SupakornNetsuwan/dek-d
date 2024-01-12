import React from "react";
import useMenuBarCustomizeAtom from "@/core/hooks/useMenuBarCustomizeAtom";
import { Button } from "@/core/components/ui/button";
import { Trash, X } from "lucide-react";
import CustomDialog from "@/core/components/CustomDialog";

const DeleteModeMenuBar = () => {
  const { setToNormalMode, deleteBookmarkInDeleteList } =
    useMenuBarCustomizeAtom();

  return (
    <div className="flex gap-x-2">
      <Button
        onClick={setToNormalMode}
        variant="outline"
        className="group flex h-auto cursor-pointer justify-between gap-x-2 p-1.5"
      >
        <X
          size={14}
          className="box-content rounded-sm bg-gray-100 p-1.5 group-hover:bg-gray-200"
        />
        <span className="text-sm font-normal">ยกเลิก</span>
      </Button>
      <CustomDialog
        title="ลบที่คั่นหนังสือที่เลือก"
        description="คุณจะไม่สามารถกู้คืนที่คั่นหนังสือได้"
        className="max-w-[30em]"
        render={({ close }) => (
          <div className="flex justify-end gap-x-1">
            <Button variant="secondary" onClick={close}>
              ยกเลิก
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                deleteBookmarkInDeleteList();
              }}
            >
              ลบ
            </Button>
          </div>
        )}
      >
        {({ open }) => (
          <Button
            onClick={open}
            variant="outline"
            className="group flex h-auto cursor-pointer justify-between gap-x-2 border-red-500 bg-red-50 p-1.5 hover:bg-red-100"
          >
            <Trash
              size={14}
              className="box-content rounded-sm bg-red-500 p-1.5 text-white"
            />
            <span className="text-sm font-normal ">ลบรายการที่เลือก</span>
          </Button>
        )}
      </CustomDialog>
    </div>
  );
};

export default DeleteModeMenuBar;
