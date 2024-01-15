import React from "react";
import { Button } from "@/core/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import CreateBookMarkProvider from "../create-bookmark-dialog/providers/CreatebookmarkProvider";
import CreateBookMarkForm from "../create-bookmark-dialog/form";
import CustomDialog from "@/core/components/CustomDialog";
import useMenuBarCustomizeAtom from "@/core/hooks/useMenuBarCustomizeAtom";

const NormalModeMenuBar = () => {
  const { setToDeleteMode } = useMenuBarCustomizeAtom();

  return (
    <div className="flex gap-x-2">
      <Button
        onClick={setToDeleteMode}
        variant="outline"
        className="group flex h-auto cursor-pointer justify-between gap-x-2 p-1.5"
      >
        <Trash2
          size={14}
          className="box-content rounded-sm bg-gray-100 p-1.5 group-hover:bg-gray-200"
        />
        <span className="text-sm font-normal">ลบรายการ</span>
      </Button>
      <CustomDialog
        title="สร้างที่คั่นใหม่ ✨"
        description=" ที่คั่นหนังสือช่วยให้คุณสามารถกลับมาอ่านหนังสือ ณ จุดเดิมที่คั่นไว้ได้โดยไม่ต้องจำชื่อบท ชื่อตอน หรือ เลขหน้า"
        render={({ close }) => (
          <CreateBookMarkProvider closeDialog={close}>
            <CreateBookMarkForm />
          </CreateBookMarkProvider>
        )}
      >
        {({ open }) => (
          <Button
            variant="outline"
            onClick={open}
            className="group flex h-auto cursor-pointer justify-between gap-x-2 p-1.5"
          >
            <Plus
              size={14}
              className="box-content rounded-sm bg-gray-100 p-1.5 group-hover:bg-gray-200"
            />
            <span className="text-sm font-normal">เพิ่มรายการ</span>
          </Button>
        )}
      </CustomDialog>
    </div>
  );
};

export default NormalModeMenuBar;
