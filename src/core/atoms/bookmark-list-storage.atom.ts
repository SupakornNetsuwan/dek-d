import { atomWithStorage } from "jotai/utils"
import Bookmark from "../entities/bookmark.entity"

const bookMarkStorageAtom = atomWithStorage<Bookmark[]>("bookMarkStorage", [])

export default bookMarkStorageAtom