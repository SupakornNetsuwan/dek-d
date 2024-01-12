import menuBarCustomizeAtom from "../atoms/menubar-customize.atom";
import bookmarkStorageAtom from "../atoms/bookmark-list-storage.atom";
import { useAtom } from "jotai";

/**
 * @description Hook สำหรับใช้ในการจัดการกับสถานะของ Menu bar
 */

const useMenuBarCustomizeAtom = () => {
  const [menuBarCustomize, setMenuBarCustomize] = useAtom(menuBarCustomizeAtom);
  const [bookmarkStorage, setBookmarkStorage] = useAtom(bookmarkStorageAtom);

  const addBookmarkToDeleteList = (bookmarkId: string) => {
    setMenuBarCustomize((prevCustomize) => {
      if (prevCustomize.mode === "delete-mode") {
        return {
          ...prevCustomize,
          chosenBookmarkId: [...prevCustomize.chosenBookmarkId, bookmarkId],
        };
      }

      // ไม่อยู่ในโหมดที่กำหนด
      throw new Error(
        "The current bookmark configuration mode is not a proper mode for action modification",
      );
    });
  };

  const deleteBookmarkInDeleteList = () => {
    if (menuBarCustomize.mode === "delete-mode") {
      setBookmarkStorage((prevInStorage) =>
        prevInStorage.filter((bookmark) => !checkIsInDeleteList(bookmark.id)),
      );
      setToNormalMode();
      return;
    }

    // ไม่อยู่ในโหมดที่กำหนด
    throw new Error(
      "The current bookmark configuration mode is not a proper mode for action modification",
    );
  };

  const removeBookmarkFromDeleteList = (bookmarkId: string) => {
    setMenuBarCustomize((prevCustomize) => {
      if (prevCustomize.mode === "delete-mode") {
        return {
          ...prevCustomize,
          chosenBookmarkId: prevCustomize.chosenBookmarkId.filter(
            (storedId) => storedId !== bookmarkId,
          ),
        };
      }

      // ไม่อยู่ในโหมดที่กำหนด
      throw new Error(
        "The current bookmark configuration mode is not a proper mode for action modification",
      );
    });
  };

  const checkIsInDeleteList = (bookmarkId: string): boolean => {
    if (menuBarCustomize.mode === "delete-mode") {
      return menuBarCustomize.chosenBookmarkId.includes(bookmarkId);
    }

    // ไม่อยู่ในโหมดที่กำหนด
    return false;
  };

  const toggleDeleteList = (bookmarkId: string) => {
    if (checkIsInDeleteList(bookmarkId)) {
      removeBookmarkFromDeleteList(bookmarkId);
    } else {
      addBookmarkToDeleteList(bookmarkId);
    }
  };

  const setToNormalMode = () => setMenuBarCustomize({ mode: "normal-mode" });
  const setToDeleteMode = () =>
    setMenuBarCustomize({ mode: "delete-mode", chosenBookmarkId: [] });

  return {
    menuBarCustomize,
    setToNormalMode,
    setToDeleteMode,
    checkIsInDeleteList,
    addBookmarkToDeleteList,
    deleteBookmarkInDeleteList,
    removeBookmarkFromDeleteList,
    toggleDeleteList,
  };
};

export default useMenuBarCustomizeAtom;
