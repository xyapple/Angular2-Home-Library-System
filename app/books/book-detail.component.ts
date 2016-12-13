import{Component, OnInit, OnDestroy} from'@angular/core';
import{ActivatedRoute, Router} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import{IBook} from './book';
import{BookService} from'./book.service';

@Component({
    templateUrl:'app/books/book-detail.component.html'
})

export class BookDetailComponent implements OnInit{
    pageTitle: string = 'Book Detail';
    book: IBook;
    errorMessage:string;
    private sub: Subscription;

    constructor(private _route:ActivatedRoute, 
    private _router: Router,
    private _bookService: BookService) {
        
    }
        
    ngOnInit(): void{
         this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this. getBook(id);
        });
    }
     ngOnDestroy() {
        this.sub.unsubscribe();
    }

     getBook(id: number) {
        this._bookService. getBook(id).subscribe(
            book => this.book = book,
            error => this.errorMessage = <any>error);
    }

    onBack(): void{
        this._router.navigate(['/books']);
    }
     onRatingClicked(message: string): void {
        this.pageTitle = 'Book Detail: ' + message;
    }
}