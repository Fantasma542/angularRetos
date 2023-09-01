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
  libros2 = false;
  books: Book[];
  searchId: number
  constructor(private apiService: BooksService, private toastr: ToastrService){
    this.apiService.getAll().subscribe((resp: Respuesta) => {
      this.books = resp.data;
      console.log(this.books)
    });
  }



  
  searchBook(id_book:number) {
    console.log(id_book)
    if(id_book)
      this.apiService.getOne(id_book).subscribe((resp: Respuesta) => {
          this.books = [resp.data_book];
          console.log(resp)
          console.log(resp.data_book)
          console.log('Libro encontrado:', this.books);
          
        } 
       
      );
    else{
      this.apiService.getAll().subscribe((resp: Respuesta)=>{
        this.books = resp.data
        console.log(this.books)
      })
    }
  }



  deleteBook(bookId: number): void {
    this.apiService.delete(bookId).subscribe((resp:Respuesta)=>{
      this.books = resp.data
      console.log(this.books)
      console.log(resp)
    })
  }



  
  ngOnInit(): void {

  }

  
  
  


  }
  


  // const libro1 = new Book(0, 0,"Hola", "Buenas", "Author", 1, "HOlaaaa")
  // const libro2 = new Book(0, 0,"sd", "dsasd", "asd", 2, "cxzc")
  // const libro3 = new Book(0, 0,"Howeqewqla", "ads", "asds", 3, "sddasdax")


  // const books = [libro1, libro2, libro3]