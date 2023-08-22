import { Component, OnInit } from '@angular/core';
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

  books: Book[] = [
    new Book('Book 1',20, "Author 1", "Type 1", "Url 1", 1),
    new Book('Book 2', 15, "Author 2", "Type 2", "Url 2", 2),
    new Book('Book 3', 2, "Author 3", "Type 3", "Url 3", 3),
  ];
  constructor(private booksService: BooksService){
  }

  
  searchBook() {
    const book = this.booksService.getOne(this.searchId);

    if (book) {
      const index = this.books.findIndex(b => {b.id_book === book.id_book});
      if (index !== -1) {
        this.hiddenBook = this.books.splice(index, 1)[0];
      }
      console.log(book)
      this.selectedBook = book;
      this.bookNotFound = false;
    } else {
      this.selectedBook = null;
      this.bookNotFound = true;
    }
  }



  closeIdNotFoundError() {
    this.bookNotFound = false;
  }
  
  newBook: Book = new Book('', 0, '', '', '', 0); // Propiedad para rastrear el nuevo libro
  
  addBook() {
    // Agregar validación si es necesario
    this.books.push(this.newBook); // Agregar el nuevo libro a la lista
    this.newBook = new Book('', 0, '', '', '', 0); // Reiniciar el objeto newBook
  }
  
  removeBook(index: number) {
    this.booksService.delete(index);
    this.books = this.booksService.getAll();
  }
  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }
  }
  


  // const libro1 = new Book(0, 0,"Hola", "Buenas", "Author", 1, "HOlaaaa")
  // const libro2 = new Book(0, 0,"sd", "dsasd", "asd", 2, "cxzc")
  // const libro3 = new Book(0, 0,"Howeqewqla", "ads", "asds", 3, "sddasdax")


  // const books = [libro1, libro2, libro3]