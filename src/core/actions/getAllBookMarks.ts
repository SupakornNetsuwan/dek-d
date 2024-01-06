import BookMark from "../entities/BookMark"

const getAllBookMarks = async () => {
    const bookMarks: BookMark[] = [
        // new BookMark({
        //     id: "a1c",
        //     name: "The Great Gatsby",
        //     thumbnail: "great_gatsby_thumbnail.jpg",
        //     author: "F. Scott Fitzgerald", episodes: [
        //         { nth: 1, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 2, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 3, name: "Snow goes flex", flaged: true },
        //         { nth: 4, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 5, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 6, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //     ],
        //     createdAt: new Date("2022-09-12"),
        //     updatedAt: new Date("2022-09-12")
        // }),
        // new BookMark({
        //     id: "caa",
        //     name: "To Kill a Mockingbird",
        //     thumbnail: "to_kill_a_mockingbird_thumbnail.jpg",
        //     author: "Harper Lee",
        //     episodes: [
        //         { nth: 1, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 2, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 3, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 4, name: "Mocker gate", flaged: true },
        //         { nth: 5, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //     ],
        //     createdAt: new Date("2022-11-08"),
        //     updatedAt: new Date("2022-11-08")
        // }),
        // new BookMark({
        //     id: "67f",
        //     name: "1984",
        //     thumbnail: "1984_thumbnail.jpg",
        //     author: "George Orwell",
        //     episodes: [
        //         { nth: 1, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 2, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 3, name: "The truely love", flaged: true },
        //         { nth: 4, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 5, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //     ],
        //     createdAt: new Date("2022-04-15"),
        //     updatedAt: new Date("2022-04-15")
        // }),
        // new BookMark({
        //     id: "90e",
        //     name: "The Great Gatsby",
        //     thumbnail: "great_gatsby_thumbnail.jpg",
        //     author: "F. Scott Fitzgerald",
        //     episodes: [
        //         { nth: 1, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 2, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 3, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 4, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 5, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 6, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 7, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 8, name: "Never give your self up", flaged: true },
        //         { nth: 9, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 10, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 11, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 12, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 13, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 14, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //     ],
        //     createdAt: new Date("2022-01-01"),
        //     updatedAt: new Date("2022-01-01")
        // }),
        // new BookMark({
        //     id: "1c7",
        //     name: "To Kill a Mockingbird",
        //     thumbnail: "to_kill_a_mockingbird_thumbnail.jpg",
        //     author: "Harper Lee",
        //     episodes: [
        //         { nth: 1, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 2, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 3, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 4, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 5, name: "The end of start", flaged: true },
        //         { nth: 6, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 7, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 8, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 9, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //     ],
        //     createdAt: new Date("2022-02-01"),
        //     updatedAt: new Date("2022-02-01")
        // }),
        // new BookMark({
        //     id: "9c9",
        //     name: "The years over",
        //     thumbnail: "1984_thumbnail.jpg",
        //     author: "Floyd mashel dive",
        //     episodes: [
        //         { nth: 1, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 2, name: "Howl moves to front of my home", flaged: true },
        //         { nth: 3, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 4, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 5, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 6, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //         { nth: 7, name: "ต้นกำเนิดของตระกูลหยาง", flaged: false },
        //     ],
        //     createdAt: new Date("2022-03-01"),
        //     updatedAt: new Date("2022-03-01")
        // })
    ]
    return bookMarks
}

export default getAllBookMarks