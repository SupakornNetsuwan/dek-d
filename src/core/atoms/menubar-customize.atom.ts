import { atom } from "jotai";
import Bookmark from "../entities/bookmark.entity";

type MenubarCustomizeType = { mode: `normal-mode` } | { mode: "delete-mode", chosenBookmarkId: string[] }

const menuBarCustomizeAtom = atom<MenubarCustomizeType>({ mode: "normal-mode", })

export default menuBarCustomizeAtom