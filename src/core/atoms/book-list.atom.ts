import { atomWithStorage } from "jotai/utils"
import Book from "../entities/book.entity"

const bookListAtom = atomWithStorage<Book[]>("bookList", [
    new Book({
        id: "1",
        name: "The Great Gatsby",
        thumbnail: "great_gatsby_thumbnail.jpg",
        author: "F. Scott Fitzgerald",
        episodes: [
            { nth: 1, name: "Nothing is easy" },
            { nth: 2, name: "Thee harden" },
            { nth: 3, name: "Snow goes flex" },
            { nth: 4, name: "Rocky road" },
            { nth: 5, name: "Chips of century" },
            { nth: 6, name: "End wings" }]
        ,
    }),
    new Book({
        id: "2",
        name: "To Kill a Mockingbird",
        thumbnail: "to_kill_a_mockingbird_thumbnail.jpg",
        author: "Harper Lee",
        episodes: [
            { nth: 1, name: "Humming bird" },
            { nth: 2, name: "Leave for future" },
            { nth: 3, name: "Coming to old house" },
            { nth: 4, name: "Final gate" },
            { nth: 5, name: "With love of family" },
        ],
    })
])

export default bookListAtom