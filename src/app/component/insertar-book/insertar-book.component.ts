import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-insertar-book',
  templateUrl: './insertar-book.component.html',
  styleUrls: ['./insertar-book.component.css']
})
export class InsertarBookComponent implements OnInit{
  idBookValue: number
  priceValue: number
  constructor(private apiService: BooksService){}

  insertarBook(id_user:HTMLInputElement,
    title: HTMLInputElement ,
    type:HTMLInputElement,
    author:HTMLInputElement,
    photo: HTMLInputElement){
      let nuevoBook: Book = new Book(title.value, this.priceValue, author.value, type.value, photo.value, this.idBookValue)
    this.apiService.postBook(nuevoBook).subscribe((resp:Respuesta)=>{
      if(!resp.error){
        alert("Libro insertado")
        title.value = ""
        this.priceValue = this.priceValue
        author.value = "" 
        type.value = "" 
        photo.value = "" 
        this.idBookValue = this.idBookValue
      } else {
        alert("El libro ya existe")
      }
    })
    }

  ngOnInit(): void {
  }
}
