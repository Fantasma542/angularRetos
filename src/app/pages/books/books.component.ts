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

  books: Book[] = [
    new Book('Book 1',20, "Author 1", "Type 1", "Url 1", 1),
    new Book('Book 2', 15, "Author 2", "Type 2", "Url 2", 2),
    new Book('Book 3', 2, "Author 3", "Type 3", "Url 3", 3),
  ];
  constructor(private booksService: BooksService, private toastr: ToastrService){
  }

  searchBook() {
    const book = this.booksService.getOne(this.searchId);
    if (book) {
      this.selectedBook = book;
      this.bookNotFound = false;
      this.toastr.success('Libro encontrado con exito')
    } else {
      this.selectedBook = null;
      this.bookNotFound = true; // Aquí se establece en true cuando no se encuentra el libro
      this.toastr.error('Libro no encontrado')
    }
  }
  closeIdNotFoundError() {
    this.bookNotFound = false;
  }

  newBook: Book = new Book('', 0, '', '', '', 0); // Propiedad para rastrear el nuevo libro


  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }
  }


  // const libro1 = new Book(0, 0,"Hola", "Buenas", "Author", 1, "HOlaaaa")
  // const libro2 = new Book(0, 0,"sd", "dsasd", "asd", 2, "cxzc")
  // const libro3 = new Book(0, 0,"Howeqewqla", "ads", "asds", 3, "sddasdax")


  // const books = [libro1, libro2, libro3]