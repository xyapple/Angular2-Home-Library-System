import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IBook } from './book';

@Injectable()
export class BookService {
    private _bookUrl = 'api/books/books.json';

    constructor(private _http: Http) { }

    getBooks(): Observable<IBook[]> {
        return this._http.get(this._bookUrl)
            .map((response: Response) => <IBook[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

     getBook(id: number): Observable<IBook> {
        return this.getBooks()
            .map((books: IBook[]) => books.find(b => b.bookId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}