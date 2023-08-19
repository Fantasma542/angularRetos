import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';

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
  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router) {
  }
  ngOnInit() {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.book = this.booksService.getOne(this.bookId) || new Book('', 0, '', '', '', 0); ;
  }
  updateBook() {
    console.log('Updating book:', this.book);
  const success = this.booksService.edit(this.book);
  console.log('Update success:', success);
    if (success) {
      // Lógica adicional en caso de éxito
      this.showEditSuccessAlert = true;
    } else {
      // Lógica adicional en caso de fallo
      this.showEditErrorAlert = true;
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