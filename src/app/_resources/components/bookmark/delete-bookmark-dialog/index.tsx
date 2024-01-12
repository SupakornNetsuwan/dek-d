import React from "react";
import { Button } from "@/core/components/ui/button";
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";
import { useToast } from "@/core/components/ui/use-toast";

const DeleteBookmarkDialogContent: React.FC<{
  bookmarkId: string;
  closeDialog: () => void;
}> = ({ bookmarkId, closeDialog }) => {
  const { toast } = useToast();

  const { deleteBookmark } = useBookmarkStorageAtom();
  return (
    <div className="flex justify-end gap-x-1">
      <Button variant="secondary" onClick={closeDialog}>
        ยกเลิก
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          deleteBookmark(bookmarkId);
          toast({
            title: "ลบที่คั่นแล้ว",
            description: `ที่คั่นหนังสือถูกนำออกจากคลังอย่างถาวร`,
          });
        }}
      >
        ลบ
      </Button>
    </div>
  );
};

export default DeleteBookmarkDialogContent;
