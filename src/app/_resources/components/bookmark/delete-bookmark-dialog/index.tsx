import React from "react";
import { Button } from "@/core/components/ui/button";
import useBookmarkStorageAtom from "@/core/hooks/useBookmarkStorageAtom";

const DeleteBookmarkDialogContent: React.FC<{ bookmarkId: string }> = ({
  bookmarkId,
}) => {
  const { deleteBookmark } = useBookmarkStorageAtom();
  return (
    <div className="flex justify-end gap-x-1">
      <Button variant="secondary" onClick={close}>
        ยกเลิก
      </Button>
      <Button variant="destructive" onClick={() => deleteBookmark(bookmarkId)}>
        ลบ
      </Button>
    </div>
  );
};

export default DeleteBookmarkDialogContent;
