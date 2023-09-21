import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{
  libros2 = false;
  books: any
  searchId: number | null = null;
  user: User
  libros: Book
  resp:Respuesta
  libroEncontrado: any | null = null;
  libros3: any[] = [];
  isSearching = false
  
  constructor(private apiService: BooksService, private toastr: ToastrService, private userService: UserService){
    // const usuario = this.userService.user;
    // const id_user = usuario.id_user

    //   // Si hay un id_user válido, carga los libros asociados a ese usuario
    //   this.apiService.getAllBooksByUser(id_user).subscribe(
    //     (resp: Respuesta) => {
    //       this.libros = resp.data_book;
    //       console.log(this.libros);
          
    //     },
    //     (error) => {
    //       console.error('Error al obtener los libros del usuario', error);
    //     }
    //   );
  
  }
  
  


  startSearch() {
    this.isSearching = true; // Estás buscando, oculta la lista de libros
    // Realiza la búsqueda y actualiza this.libros si es necesario
  }
  stopSearch() {
    this.isSearching = false; // Dejas de buscar, muestra la lista de libros
    // Restaura la lista de libros si es necesario
  }
  
  searchBook() {
    const userId = this.userService.getUserId();
    if (this.searchId !== null) {
      this.apiService.getOne(userId.toString(), this.searchId).subscribe((resp: any) => {
        if (resp.error === false && resp.data_book.length > 0) {
          this.libros3 = resp.data_book; // Asigna los libros encontrados a libros3
          this.isSearching = true; // Configura isSearching en true durante la búsqueda
        } else {
          this.libros3 = []; // Limpia libros3 si no se encontraron libros
          this.isSearching = false;
        }
      });
    } else {
      // Si el searchId es nulo, carga todos los libros nuevamente
      this.loadBooks();
      this.isSearching = false; // Configura isSearching en false cuando no estás buscando
    }
  }
  loadBooks() {
    const userId = this.userService.getUserId();
    this.apiService.getAllBooksByUser(userId).subscribe(
      (resp: any) => {
        this.libros = resp.data_book;
        console.log('Lista de libros:', this.libros);
      }
    );
  }


  deleteBook(id_book: number): void {
    this.apiService.delete(id_book).subscribe(
      () => {
        // Actualiza la lista de libros después de eliminar
        this.loadBooks();
      },
      (error) => {
        console.error('Error al eliminar el libro:', error);
      }
    );
  }
  

  // getBooks() {
  //   const userId = this.userService.getUserId();

  //   this.apiService.getAllBooksByUser(this.user.id_user).subscribe(
  //     (resp : Respuesta) => {
  //       this.books = resp.data_book; // Asigna los datos de libros al arreglo books
  //       console.log(this.books);

        
  //     },
  //     (error) => {
  //       console.error('Error al obtener los libros', error);
  //     }
  //   );
  // }

  
  ngOnInit() {
    this.loadBooks();
    // Obtener el ID de usuario de algún servicio o estado compartido
    const userId = this.userService.getUserId(); // Reemplaza esto con la forma en que obtienes el ID de usuario
  
    // Usar el ID de usuario para cargar los libros
    this.apiService.getAllBooksByUser(userId).subscribe(
      (response: Respuesta) => {
        // Asignar los libros obtenidos a la propiedad 'books'
        this.libros = response.data_book;
        console.log(this.libros);
      },
      (error) => {
        console.error('Error al cargar los libros del usuario:', error);
      }
    );
  }
}
  


  // const libro1 = new Book(0, 0,"Hola", "Buenas", "Author", 1, "HOlaaaa")
  // const libro2 = new Book(0, 0,"sd", "dsasd", "asd", 2, "cxzc")
  // const libro3 = new Book(0, 0,"Howeqewqla", "ads", "asds", 3, "sddasdax")


  // const books = [libro1, libro2, libro3]