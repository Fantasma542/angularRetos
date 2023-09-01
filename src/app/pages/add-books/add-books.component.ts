import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  books: Book[] = [
  ];
  constructor(private apiService: BooksService, private toastr: ToastrService){
    
  }

  newBook: Book = new Book('', null, '', '', '', null);

  addBook() {

    this.apiService.add(this.newBook).subscribe((addedBook: Book) => {
      console.log('Libro agregado:', addedBook);
      this.toastr.success("libro añadido")
    });

    
  }

  ngOnInit(): void {
  }

}
