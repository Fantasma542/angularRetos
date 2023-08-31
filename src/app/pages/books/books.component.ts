import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{
  mostrandoLibros: boolean = false;
  books: Book[] = [];
  bookId: number 
  selectedBook: Book
  constructor(private apiService: BooksService, private toastr: ToastrService){
  }


  ngOnInit(): void {
  }
  mostrarLibros() {
    this.apiService.getAll().subscribe((resp:Respuesta)=>{
    console.log(resp)
    if(resp.error){
      this.toastr.warning("El libbro no existe.", "",{timeOut: 2000, positionClass: "toast-top"})
      this.mostrandoLibros = false
    }else {
      this.apiService.books = resp.data
      this.mostrandoLibros = true;
      console.log(resp.data)
    }
  })
  
  }
  buscarLibro() {
    this.selectedBook = null;
    if (this.bookId > 0) {
      this.apiService.getOne(this.bookId).subscribe((resp: Respuesta) => {
        if (resp.error) {
          this.toastr.error("El libro no existe.", "", { timeOut: 2000, positionClass: "toast-top" });
          this.selectedBook = null; 
        } else {
          this.selectedBook = resp.data[0];
        }
      });
    }
  }

  }
  


  // const libro1 = new Book(0, 0,"Hola", "Buenas", "Author", 1, "HOlaaaa")
  // const libro2 = new Book(0, 0,"sd", "dsasd", "asd", 2, "cxzc")
  // const libro3 = new Book(0, 0,"Howeqewqla", "ads", "asds", 3, "sddasdax")


  // const books = [libro1, libro2, libro3]