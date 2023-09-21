import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  books: Book[] = [
  ];
  constructor(private apiService: BooksService, private toastr: ToastrService, private userService: UserService){
    
  }

  newBook: Book = new Book('', null, '', '', '', null, null);

  addBook() {
    // Obten el id_user del usuario autenticado (reemplaza esto con tu lógica de autenticación)
    const userId = this.userService.getUserId(); // Supongamos que tienes una función para obtener el id_user

    // Agrega el id_user a los datos del libro
    this.newBook.id_user = userId;

    // Envía la solicitud para agregar el libro
    this.apiService.add(userId, this.newBook).subscribe((addedBook: Book) => {
      console.log('Libro agregado:', addedBook);
      this.toastr.success('Libro añadido');
    });
  }
  ngOnInit(): void {
  }

}
