import { z } from "zod"

export interface EpisodeDto { nth: number, name: string };

export interface BookDto { id: string, name: string, thumbnail: string, author: string, episodes: EpisodeDto[] }

/**
 * @class Book
 * @description Book entity
 * @property {string} id ไอดี
 * @property {string} name ชื่อเรื่อง
 * @property {string} thumbnail ปก
 * @property {string} author ชื่อผู้แต่ง
 * @property {Esposide[]} episodes ตอนทั้งหมด
 * */

class Book implements BookDto {
    public id: string
    public name: string;
    public thumbnail: string;
    public author: string;
    public episodes: EpisodeDto[];

    constructor({ id, name, thumbnail, author, episodes }: BookDto) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.author = author;
        this.episodes = episodes;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setThumbnail(value: string) {
        this.thumbnail = value;
    }

    public setAuthor(value: string) {
        this.author = value;
    }

    public setEpisodes(value: EpisodeDto[]) {
        this.episodes = value;
    }

    get getLastEpisode(): EpisodeDto | undefined {
        return this.episodes.at(-1)
    }

    public toDto() {
        const dto: BookDto = {
            author: this.author,
            episodes: this.episodes,
            id: this.id,
            name: this.name,
            thumbnail: this.thumbnail
        }

        return dto
    }
}

/* ------ Schema 🍽️ ------ */

export const episodeSchema = z.object({
    nth: z.number(),
    name: z.string(),
    flagged: z.boolean()
}) satisfies z.ZodType<EpisodeDto>

export const createBookSchema = z.object({
    author: z.string(),
    episodes: z.array(episodeSchema),
    id: z.string(),
    name: z.string(),
    thumbnail: z.string(),
}) satisfies z.ZodType<BookDto>

export type createBookSchemaType = z.infer<typeof createBookSchema>

export default Book