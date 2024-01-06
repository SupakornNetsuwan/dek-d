type Episode = { nth: number; name: string; flaged: boolean };

/**
 * @class BookMark
 * @description Bookmark entity
 * @property {string} name ชื่อเรื่อง
 * @property {string}thumbnail ปก
 * @property {string} author ชื่อผู้แต้ง
 * @property {Esposide[]} espisode ตอนทั้งหมด
 * @property {Date} updatedAt วันเวลาที่อัปดตล่าสุด
 * @property {Date} createdAt วันเวลาที่ถูกสร้าง
 */

export interface BookMarkDto { id: string, name: string, thumbnail: string, author: string, episodes: Episode[], updatedAt: Date, createdAt: Date }

class BookMark implements BookMarkDto {
    private _id: string
    private _name: string;
    private _thumbnail: string;
    private _author: string;
    private _espisodes: Episode[];
    private _updatedAt: Date;
    private _createdAt: Date;

    constructor({ id, author, createdAt, episodes, name, thumbnail, updatedAt }: BookMarkDto) {
        this._id = id;
        this._name = name;
        this._thumbnail = thumbnail;
        this._author = author;
        this._espisodes = episodes;
        this._updatedAt = updatedAt;
        this._createdAt = createdAt;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }

    set thumbnail(value: string) {
        this._thumbnail = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get episodes(): Episode[] {
        return this._espisodes;
    }

    set episodes(value: Episode[]) {
        this._espisodes = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get getMarkedEpisode(): Episode | undefined {
        return this.episodes.find(episode => episode.flaged)
    }

    get getLastEpisode(): Episode | undefined {
        return this.episodes.at(-1)
    }

    get getProgress(): number {

        const lastEpisode = this.getLastEpisode
        const markedEpisode = this.getMarkedEpisode

        if (!lastEpisode || !markedEpisode) return 0 // No appropriate data 🔴

        return Math.round((markedEpisode.nth * 100) / lastEpisode.nth)
    }

    public toPlainObject() {
        const dto: BookMarkDto = {
            author: this.author,
            createdAt: this.createdAt,
            episodes: this.episodes,
            id: this.id,
            name: this.name,
            thumbnail: this.thumbnail,
            updatedAt: this.updatedAt
        }

        return dto
    }
}


export default BookMark;