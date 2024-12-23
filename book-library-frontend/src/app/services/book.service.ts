import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/api/books'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Get all books
  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a new book
  addBook(book: any): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  // Delete a book
  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
