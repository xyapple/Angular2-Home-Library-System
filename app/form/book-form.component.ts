import { Component } from '@angular/core';
import { Bookform } from './bookform';

@Component({
  moduleId: module.id,
  selector: 'book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  languages = ['English', 'Spanish', 'Chinese', 'French', 'Italitan', 'German','Portuguese','Arabic','Others'];

  model = new Bookform(32,  this.languages[0],
  'Stamped from the Beginning: The Definitive History of Racist Ideas ', 
  9781568584638, 
  'Ibram X. Kendi', 
  'Nation Books', 
  'April 12, 2016',
  'New York',
  4.8);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
 