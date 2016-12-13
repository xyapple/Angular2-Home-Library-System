import {NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import{CommonModule} from '@angular/common';
import{RouterModule}from '@angular/router';

import{BookDetailComponent} from'./book-detail.component';
import{ BookListComponent } from './books-list.component';
import{ BookFilterPipe } from './book-filter.pipe';
import{StarComponent} from '../shared/star.component';
import{BookDetailGuard} from './book-guard.service';
import{BookService} from './book.service';

@NgModule({
    declarations:[
        BookListComponent, 
        BookFilterPipe,
        StarComponent, 
        BookDetailComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
               {path:'books', component: BookListComponent},
    {path:'book/:id', canActivate:[BookDetailGuard], component: BookDetailComponent},

        ])
    ],
    providers:[
        BookService,
        BookDetailGuard
    ]


})
export class BookModule {

}