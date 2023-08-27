import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-mostrar-book',
  templateUrl: './mostrar-book.component.html',
  styleUrls: ['./mostrar-book.component.css']
})
export class MostrarBookComponent implements OnInit{
  constructor(public apiService: BooksService){
    this.apiService.books = null
  }

  mostrarBook(){
    this.apiService.getBook().subscribe((resp:Respuesta) =>{
      console.log(resp);
      if (resp.error) {
        alert("El usuario no existe")
      } else {
        this.apiService.books = resp.data
      }
      
    })
  }
  ngOnInit(): void {
  }
}
