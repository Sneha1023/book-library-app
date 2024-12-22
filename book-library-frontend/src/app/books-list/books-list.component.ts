import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-list',
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit {
  books: any[] = [];
  bookService: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get<any[]>('http://localhost:3000/api/books').subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
    });
  }
  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((book) => book._id !== id);
    });
  }
}
