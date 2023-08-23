import { Component, OnInit} from '@angular/core';

import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit{
  bookId: number;
  book: Book = new Book('', null, '', '', '', null);
  constructor(private booksService: BooksService, private toastr: ToastrService) {
  }
  ngOnInit() {
  }
  updateBook() {
    console.log('Libro actualizado:', this.book);
    
  const success = this.booksService.edit(this.book);
  console.log('Update success:', success);
    if (success) {
      this.toastr.success('Libro editado con exito')
    } else {
      this.toastr.error('Libro para editar no encontrado')
    }
  }
}
