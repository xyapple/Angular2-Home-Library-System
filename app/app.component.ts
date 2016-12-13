import { Component } from '@angular/core';
@Component({
    selector: 'book-app',
    template: `
   <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/books']">Book List</a></li>
                    <li><a [routerLink]="['/bookform']">Add Books</a></li>                      
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>   
    `
   
})
export class AppComponent {
    pageTitle: string = 'CS701 Final Project';

 }
