import { useAtom } from "jotai";
import bookMarkStorageAtom from "../atoms/bookmark-list-storage.atom";

const useBookMarkStorageAtom = () => {
  return useAtom(bookMarkStorageAtom);
};

export default useBookMarkStorageAtom;
