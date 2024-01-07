import { z } from "zod"
import Book, { type EpisodeDto, BookDto, episodeSchema, createBookSchema } from "./book.entity";

export interface BookMarkDto { book: BookDto, flaggedEpisode: EpisodeDto, updatedAt?: Date, createdAt?: Date }

/**
 * @class BookMark
 * @description Bookmark entity
 * @property {Episode} flaggedEpisode ตอนที่ถูกคั่นไว้
 * @property {Date} updatedAt วันเวลาที่อัปดตล่าสุด
 * @property {Date} createdAt วันเวลาที่ถูกสร้าง
 */

class BookMark {
    public book: Book;
    public flaggedEpisode: EpisodeDto;
    public updatedAt: Date;
    public createdAt: Date;

    constructor({ book: bookDto, flaggedEpisode, createdAt, updatedAt }: BookMarkDto) {
        this.book = new Book(bookDto) // เราเก็บ property หนังสือไว้เพื่อเข้าถึงได้ว่าที่คั่นนี้ของหนังสือเล่มไหนตามหลักการ Objecy Oriented ✨
        this.flaggedEpisode = flaggedEpisode;
        this.updatedAt = updatedAt || new Date();
        this.createdAt = createdAt || new Date();

        if (!this.book.episodes.some(episode => JSON.stringify(episode) === JSON.stringify(flaggedEpisode))) {
            throw new Error("Bookmark episode was not found in entries of episodes")
        }
    }

    public setBook(value: Book) {
        this.book = value;
    }

    public setFlaggedEpisode(value: EpisodeDto) {
        if (!this.book.episodes.some(episode => JSON.stringify(episode) === JSON.stringify(value))) {
            throw new Error("Bookmark episode was not found in entries of episodes")
        }

        this.flaggedEpisode = value;
    }

    public setUpdatedAt(value: Date) {
        this.updatedAt = value;
    }

    public setCreatedAt(value: Date) {
        this.createdAt = value;
    }

    get getProgress(): number {

        const lastEpisode = this.book.getLastEpisode
        const flaggedEpisode = this.flaggedEpisode

        if (!lastEpisode || !flaggedEpisode) return 0 // No appropriate data 🔴

        return Math.round((flaggedEpisode.nth * 100) / lastEpisode.nth)
    }

    get getUnReadAmount(): number {
        return this.book.getLastEpisode?.nth! - this.flaggedEpisode.nth
    }

    public toDto() {
        const dto: BookMarkDto = {
            book: Object.assign({}, this.book),
            flaggedEpisode: this.flaggedEpisode,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }

        return dto
    }
}

/* ------ Schema 🍽️ ------ */

export const createBookMarkSchema = z.object({
    book: createBookSchema,
    flaggedEpisode: episodeSchema,
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
}) satisfies z.ZodType<BookMarkDto>

export type CreateBookMarkSchemaType = z.infer<typeof createBookMarkSchema>

export default BookMark;