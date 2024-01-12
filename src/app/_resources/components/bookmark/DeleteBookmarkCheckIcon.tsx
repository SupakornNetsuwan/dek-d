import React from "react";
import { cn } from "@/core/lib/utils";
import { Check } from "lucide-react";
import useMenuBarCustomizeAtom from "@/core/hooks/useMenuBarCustomizeAtom";

const DeleteBookmarkCheckIcon: React.FC<{ bookmarkId: string }> = ({
  bookmarkId,
}) => {
  const { checkIsInDeleteList } = useMenuBarCustomizeAtom();

  return (
    <button
      className={cn(
        "grid size-6 place-content-center rounded-sm border border-red-500 bg-white outline-none ring-offset-2 sm:size-5",
        checkIsInDeleteList(bookmarkId) && "bg-red-50",
      )}
    >
      {checkIsInDeleteList(bookmarkId) && (
        <Check size={14} className="stroke-[3px] text-red-500" />
      )}
    </button>
  );
};

export default DeleteBookmarkCheckIcon;
