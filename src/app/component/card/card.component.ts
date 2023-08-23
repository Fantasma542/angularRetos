import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book; 
  @Input() even: boolean; 
 
  @Output() removeCard = new EventEmitter<void>();
  
  constructor(private booksService: BooksService) {}
  onRemoveCard() {
    this.booksService.delete(this.book.id_book);
  }
}
