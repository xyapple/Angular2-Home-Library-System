import { Component, OnInit } from '@angular/core';
import{ IBook } from'./book';
import{BookService} from './book.service';

@Component({  
    moduleId:module.id,
    templateUrl:'books-list.component.html',
    styleUrls:['books-list.component.css']         
})

export class BookListComponent implements OnInit{
   pageTitle: string='Book List';
   imageWidth: number = 100;
   imageMargin: number =2;
   showImage: boolean= false;
   listFilter: string;
   errorMessage: string;
   books: IBook[];
constructor(private _bookService: BookService){

}
   toggleImage():void{
       this.showImage = !this.showImage;
   }
   ngOnInit():void{
        this._bookService.getBooks()
        .subscribe(books => this.books = books,
        error => this.errorMessage= <any>error);
   }
   onRatingClicked(message:string): void{
       this.pageTitle = 'Book List: '+message;
   }
 }