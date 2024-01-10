import { useAtom } from "jotai";
import bookmarkStorageAtom from "../atoms/bookmark-list-storage.atom";
import Bookmark from "../entities/bookmark.entity";
import { useToast } from "@components/use-toast";

/**
 * @description Hook สำหรับใช้ในการจัดการกับ Bookmark storage (Persistant layer mocking)
 */

const useBookmarkStorageAtom = () => {
  const { toast } = useToast();
  const [bookmarkStorage, setBookmarkStorage] = useAtom(bookmarkStorageAtom);

  const addBookmark = (newBookmark: Bookmark) => {
    setBookmarkStorage([newBookmark, ...bookmarkStorage]);
  };

  const deleteBookmark = (id: string) => {
    setBookmarkStorage(
      bookmarkStorage.filter((bookmark) => bookmark.id !== id),
    );
    toast({
      title: "ลบที่คั่นแล้ว",
      description: `ที่คั่นหนังสือถูกนำออกจากคลังอย่างถาวร`,
    });
  };

  const updateBookmark = (id: string, updateBookmark: Bookmark) => {
    const index = bookmarkStorage.findIndex((target) => target.id === id);
    const copied = [...bookmarkStorage];
    Object.assign(copied[index], updateBookmark);
    setBookmarkStorage(copied);
  };

  const getBookmark = (id: string) => {
    const found = bookmarkStorage.find((bookmark) => bookmark.id === id);
    if (!found) throw new Error("No bookmark found from providing ID");
    return found;
  };

  return {
    bookmarkList: bookmarkStorage,
    getBookmark,
    addBookmark,
    deleteBookmark,
    updateBookmark,
  };
};

export default useBookmarkStorageAtom;
