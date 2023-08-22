import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  books: Book[] = [
    new Book('Book 1',20, "Author 1", "Type 1", "Url 1", 1),
    new Book('Book 2', 15, "Author 2", "Type 2", "Url 2", 2),
    new Book('Book 3', 2, "Author 3", "Type 3", "Url 3", 3),
  ];
showSuccessAlert: boolean = false;
showErrorAlert: boolean = false;
successMessage: string = 'Libro añadido con éxito';
errorMessage: string = 'No se pudo añadir el libro';
  constructor(private booksService: BooksService){}

  newBook: Book = new Book('', 0, '', '', '', 0); // Propiedad para rastrear el nuevo libro

  addBook() {
    // Agregar validación si es necesario
    this.booksService.add(this.newBook); // Agregar el nuevo libro a la lista
    this.newBook = new Book('', 0, '', '', '', 0); // Reiniciar el objeto newBook
    this.showSuccessAlert = true;
  }
  closeSuccessAlert() {
    this.showSuccessAlert = false;
  }
  closeErrorAlert() {
    this.showErrorAlert = false;
  }
  ngOnInit(): void {
  }

}
