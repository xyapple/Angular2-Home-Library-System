import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import{HttpModule} from '@angular/http';
import{RouterModule} from '@angular/router';

/* Feature Modules */
import{BookModule} from './books/book.module';

//homescrean
import {WelcomeComponent} from './home/welcome.component';

//import FormsModule 
import {FormsModule} from '@angular/forms';
import{BookFormComponent} from './form/book-form.component';

@NgModule({
  imports: [ 
  BrowserModule, 
  FormsModule,
  HttpModule, 
  RouterModule.forRoot([
  {path:'welcome', component: WelcomeComponent},
  {path:'bookform', component: BookFormComponent},
  {path:'', redirectTo: 'welcome',pathMatch:'full'},
  {path:'**', redirectTo: 'welcome',pathMatch:'full'}
  ]),
  BookModule
  ],
  declarations: [ 
    AppComponent, 
  WelcomeComponent,
  BookFormComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
