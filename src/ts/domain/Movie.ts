import Buyable from './Buyable';

export default class Movie implements Buyable {
    readonly id: number;
    readonly price: number;
    readonly name: string;
    readonly author: string;
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly genre: string;
    readonly time: number;

    constructor(id: number, price: number, name: string, author: string, year: number, country: string, slogan: string, genre: string, time: number) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
     }
}