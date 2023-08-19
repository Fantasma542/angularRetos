import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book; // Datos del libro recibidos del componente padre
  @Input() even: boolean; // Variable para indicar si es posición par
 
  @Output() removeCard = new EventEmitter<void>(); // Evento para eliminar la tarjetaeta
  
  constructor(private booksService: BooksService) {}

  // Función para emitir el evento de eliminación al componente padre
  onRemoveCard() {
    this.booksService.delete(this.book.id_book);
  }
}
