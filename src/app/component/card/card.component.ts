import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: any; // Datos del libro recibidos del componente padre
  @Input() even: boolean; // Variable para indicar si es posición par

  @Output() removeCard = new EventEmitter<void>(); // Evento para eliminar la tarjetaeta

  // Función para emitir el evento de eliminación al componente padre
  onRemoveCard() {
    this.removeCard.emit();
  }
}
