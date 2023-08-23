import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [ new Book('Book 1',20, "Author 1", "Type 1", "Url 1", 1),
  new Book('Book 2', 15, "Author 2", "Type 2", "Url 2", 2),
  new Book('Book 3', 2, "Author 3", "Type 3", "Url 3", 3),];
  constructor() { }

  getAll(): Book[] {
    return this.books;
  }
  getOne(id_libro: number): Book {
    return this.books.find(book => book.id_book === id_libro);
  }
  add(book: Book): void {
    this.books.push(book);
  }
  edit(book: Book): boolean {
    const index = this.books.findIndex(existingBook => existingBook.id_book === book.id_book);
    if (index !== -1) {
      this.books[index] = book;
      return true;
    }
    return false;
  }
  delete(id_book: number): boolean {
    const index = this.books.findIndex(existingBook => existingBook.id_book === id_book);

    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }   
  removeBook(book: Book) {
    const index = this.books.findIndex(b => b.id_book === book.id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}

