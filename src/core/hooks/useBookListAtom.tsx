import { useAtom } from "jotai";
import bookListStorageAtom from "../atoms/book-list-storage.atom";

const useBookListStorageAtom = () => {
  return useAtom(bookListStorageAtom);
};

export default useBookListStorageAtom;
