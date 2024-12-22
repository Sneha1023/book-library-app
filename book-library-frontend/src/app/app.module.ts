import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksListComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
