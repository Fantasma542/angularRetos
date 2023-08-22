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
  showEditSuccessAlert: boolean = false;
  showEditErrorAlert: boolean = false
  bookId: number;
  book: Book = new Book('', 0, '', '', '', 0);
  constructor(private booksService: BooksService, private toastr: ToastrService) {
  }
  ngOnInit() {
  }
  updateBook() {
    console.log('Updating book:', this.book);
    
  const success = this.booksService.edit(this.book);
  console.log('Update success:', success);
    if (success) {
      // Lógica adicional en caso de éxito
      this.toastr.success('Libro editado con exito')
    } else {
      // Lógica adicional en caso de fallo
      this.toastr.error('Libro editado sin exito')
    }
  }
  closeEditSuccessAlert() {
    this.showEditSuccessAlert = false;
  }
  closeEditErrorAlert() {
    this.showEditErrorAlert = false;
  }
}

// interface Book {
//   title: string;
//   price: number;
//   author: string;
//   type: string;
//   url: string;

//   id: number;
// }