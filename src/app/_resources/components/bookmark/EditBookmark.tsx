import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import CustomDialog from "@/core/components/CustomDialog";
import EditBookmarkProvider from "./edit-bookmark-dialog/providers/EditBookmarkProvider";
import DeleteBookmarkDialogContent from "./delete-bookmark-dialog";
import EditBookMarkForm from "./edit-bookmark-dialog/form";
import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";

const EditBookmark: React.FC<{ bookmarkId: string }> = ({ bookmarkId }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-6 rounded-sm sm:size-5 sm:border-none"
        >
          <MoreHorizontal size={14} className="" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-36 max-w-none p-1">
        <CustomDialog
          title="แก้ไขที่คั่นหนังสือ"
          description="แก้ไขข้อมูลที่คั่นหนังสือเดิมในคลัง"
          render={({ close }) => {
            return (
              <EditBookmarkProvider bookmarkId={bookmarkId} closeDialog={close}>
                <EditBookMarkForm />
              </EditBookmarkProvider>
            );
          }}
        >
          {({ open }) => {
            return (
              <button
                onClick={open}
                className="w-full group flex cursor-pointer items-center justify-between p-1.5 text-sm hover:bg-slate-100"
              >
                <Pencil
                  size={14}
                  className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
                />
                <span>แก้ไขรายการ</span>
              </button>
            );
          }}
        </CustomDialog>
        <CustomDialog
          className="max-w-[30em]"
          title="ลบที่คั่นหนังสือ"
          description="คุณจะไม่สามารถกู้คืนที่คั่นหนังสือได้"
          render={({ close }) => (
            <DeleteBookmarkDialogContent
              closeDialog={close}
              bookmarkId={bookmarkId}
            />
          )}
        >
          {({ open }) => (
            <button
              onClick={open}
              className="w-full group flex cursor-pointer items-center justify-between p-1.5 text-sm hover:bg-slate-100"
            >
              <Trash2
                size={14}
                className="box-content rounded-sm bg-gray-100 p-2 group-hover:bg-gray-200"
              />
              <span>ลบรายการ</span>
            </button>
          )}
        </CustomDialog>
      </PopoverContent>
    </Popover>
  );
};

export default EditBookmark;
