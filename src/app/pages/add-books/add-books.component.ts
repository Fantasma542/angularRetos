import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  books: Book[] = [
    
  ];
  constructor(private booksService: BooksService, private toastr: ToastrService){
    
  }

  addBook(title: string, price: number, author: string, type: string, photo: string, id_book: number,) {
    const newBook = new Book(title, price, author, type, photo, id_book);
    this.booksService.add(newBook).subscribe((resp: Respuesta)=>{
      if (!resp.error) {
        alert("Libro insertado");
        title= ""
        price= null
        author= ""
        type= ""
        photo= ""
        id_book= null
        console.log(newBook)
      } else {
        alert("El libro ya existe");
      }
    }); 
    this.toastr.success('Libro añadido con exito');

    
  }

  ngOnInit(): void {
  }

}
