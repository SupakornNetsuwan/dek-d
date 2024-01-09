import { atomWithStorage } from "jotai/utils"
import Book from "../entities/book.entity"

const bookStorageAtom = atomWithStorage<Book[]>("bookStorage", [
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
    }),
    new Book({
        id: "3",
        name: "The years over",
        thumbnail: "years_over_thumbnail.jpg",
        author: "Floyd mashel dive",
        episodes: [
            { nth: 1, name: "Lost of kingdom" },
            { nth: 2, name: "Howl moves to front of my home" },
            { nth: 3, name: "1944 where it began" },
            { nth: 4, name: "Whether or not" },
            { nth: 5, name: "Do not lost your self" },
            { nth: 6, name: "Sacrifier" },
            { nth: 7, name: "Harmonic" },
        ],
    }),
    new Book({
        id: "4",
        name: "The thousand mile",
        thumbnail: "thoundsand_mile_thumbnail.jpg",
        author: "Supakorn Netsuwan",
        episodes: [
            { nth: 1, name: "The begin of love" },
            { nth: 2, name: "Started from the land end in the sky" },
            { nth: 3, name: "The girl who fell in love" },
        ],
    })
])

export default bookStorageAtom