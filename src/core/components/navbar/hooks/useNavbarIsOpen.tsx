import { atom, useAtom } from "jotai";

const isNavbarOpenAtom = atom(false);

const useIsNavbarOpen = () => {
  return useAtom(isNavbarOpenAtom);
};

export default useIsNavbarOpen;
