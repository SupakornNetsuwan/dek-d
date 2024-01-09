import { useAtom } from "jotai";
import bookStorageAtom from "../atoms/book-storage.atom";

const useBookStorageAtom = () => {
  return useAtom(bookStorageAtom);
};

export default useBookStorageAtom;
