import { Component, OnInit} from '@angular/core';

import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit{
  bookId: number;
  books: Book[] = [
  ];
  bookUpdate: Book = {
    title: "",
    price: null,
    author: "",
    type: "",
    photo: "",
    id_book: null
  }
  constructor(private route: ActivatedRoute, private apiService: BooksService, private toastr: ToastrService) {
  }
  ngOnInit() {
  }
  updateBook() {
    
    this.apiService.edit(this.bookUpdate).subscribe(() => {
      console.log('Libro agregado:');
      this.toastr.success("libro añadido")
    });

  }
  }
