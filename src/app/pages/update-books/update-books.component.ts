import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
  bookId: number;
  book: Book = new Book("", null, "", "", "", null);

  constructor(
    private apiService: BooksService,
    private toastr: ToastrService
  ) {}
  editarLibro() {
    this.apiService.edit(this.book).subscribe((resp: Respuesta) => {
      if (resp.error) {
        this.toastr.error("No se pudo editar el libro.", "", { timeOut: 2000, positionClass: "toast-top" });
      } else {
        this.toastr.success("Libro editado exitosamente.", "", { timeOut: 2000, positionClass: "toast-top" });
      }
    });
  }
}