import { useAtom } from "jotai";
import bookListAtom from "../atoms/book-list.atom";

const useBookListAtom = () => {
  return useAtom(bookListAtom);
};

export default useBookListAtom;
