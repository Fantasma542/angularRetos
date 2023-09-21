import { Component, OnInit} from '@angular/core';

import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
    id_book: null,
    id_user: null
  }
  constructor(private route: ActivatedRoute, private apiService: BooksService, private toastr: ToastrService, private router: Router) {
  }
  ngOnInit() {
  }
  updateBook(): void {
    this.apiService.edit(this.bookUpdate).subscribe(
      () => {
        console.log('Libro actualizado:');
        this.toastr.success('Libro actualizado');
        // Redirigir a la página de detalles del libro actualizado
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error('Error al actualizar el libro:', error);
        this.toastr.error('Error al actualizar el libro');
      }
    );
  }
  }
