import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  book = {
    title: '',
    author: '',
    genre: ''
  };

  constructor(private bookService: BookService, private router: Router, private http: HttpClient) {}

  addBook() {
    this.http.post('http://localhost:3000/api/books', this.book).subscribe({
      next: (response) => {
        console.log('Book added successfully:', response);
        alert('Book added successfully!');
        this.book = { title: '', author: '', genre: '' }; // Reset the form
      },
      error: (error) => {
        console.error('Error adding book:', error);
        alert('Failed to add the book.');
      }
    });
    this.bookService.addBook(this.book).subscribe(() => {
      alert('Book added successfully!');
      this.router.navigate(['/books']);
    });
  }
}
