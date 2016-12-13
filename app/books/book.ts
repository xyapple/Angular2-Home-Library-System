/* Defines the product entity */
export interface IBook{
        bookId: number;
        bookTitle: string;
        language: string;
        author: string;
        ISBN: number;
        datePublished: Date;
        publisher: string;
        publishedPlace: string;
        price: number;
        starRating: number;
        imageUrl: string;
}

