import { atomWithStorage } from "jotai/utils"
import Bookmark from "../entities/bookmark.entity"

const bookmarkStorageAtom = atomWithStorage<Bookmark[]>("bookmarkStorage", [])

export default bookmarkStorageAtom