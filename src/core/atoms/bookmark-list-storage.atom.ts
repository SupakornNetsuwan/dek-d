import { atomWithStorage } from "jotai/utils"
import BookMark from "../entities/bookmark.entity"

const bookMarkStorageAtom = atomWithStorage<BookMark[]>("bookMarkStorage", [])

export default bookMarkStorageAtom