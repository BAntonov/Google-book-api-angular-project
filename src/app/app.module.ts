import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { BookItemComponent } from './book-item/book-item.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    ListOfBooksComponent,
    EditFormComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
