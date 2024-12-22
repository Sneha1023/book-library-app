import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any[] = [];
  newBook = { title: '', author: '', year: null };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.fetchBooks();
      this.newBook = { title: '', author: '', year: null };
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => this.fetchBooks());
  }
}
