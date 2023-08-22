import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{
  bookNotFound: boolean = false;
  selectedBook: Book | null = null;
  searchId: number | undefined;
  hiddenBook: Book | null = null;
  hasBooks: boolean = false;

  books: Book[] = [];
  constructor(private booksService: BooksService, private toastr: ToastrService){
  }

  
  searchBook() {
    const book = this.booksService.getOne(this.searchId);
    if (book) {
      this.selectedBook = book;
      this.bookNotFound = false;
      this.toastr.success('Libro encontrado con éxito');
      console.log(this.booksService)
    } else {
      this.selectedBook = null;
      this.bookNotFound = true;
      this.toastr.error('El libro no ha sido encontrado');
    }
  }

  removeBook(book: Book) {
    this.booksService.removeBook(book);
    this.books = this.booksService.getAll();
    if (this.selectedBook === book) {
      this.selectedBook = null;
      this.bookNotFound = false;
    }
  }
  ngOnInit(): void {
    this.books = this.booksService.getAll();
    this.hasBooks = this.books.length > 0; // Verificar si hay libros
  }

  
  
  
  get filteredBooks(): Book[] {
    if (!this.selectedBook) {
      return this.books;
    } else {
      return this.books.filter(book => book.id_book !== (this.selectedBook ? this.selectedBook.id_book : null));
    }
  }

  }
  


  // const libro1 = new Book(0, 0,"Hola", "Buenas", "Author", 1, "HOlaaaa")
  // const libro2 = new Book(0, 0,"sd", "dsasd", "asd", 2, "cxzc")
  // const libro3 = new Book(0, 0,"Howeqewqla", "ads", "asds", 3, "sddasdax")


  // const books = [libro1, libro2, libro3]