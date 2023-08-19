import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [];
  constructor() { }

  getAll(): Book[] {
    return this.books;
  }
  getOne(id_libro: number): Book | undefined {
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
}

