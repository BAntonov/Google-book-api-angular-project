export class Book {


    constructor(public id: number,
        public AuthorName: string,
        public PublishedDate: string,
        public BookTitle: string,
        public imageLinks:{smallThumbnail:string,thumbnail:string}
        ){

    }
}
