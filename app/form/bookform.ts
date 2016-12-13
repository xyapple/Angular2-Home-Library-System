export class Bookform {
    constructor(
        public id: number,
        public language: string,
        public title: string,
        public ISBN: number,
        public author: string,
        public publisher: string,
        public publishedDate: string,
        public publishPlace: string,  
        public rating: number           
        
    ) {
        
    }
}