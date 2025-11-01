import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {

  // Define el texto que se mostrará en el botón
  @Input() label : string = 'Button';

  // Define el tipo de botón: primary, secundary o danger
  @Input() type : 'primary' | 'secondary' | 'danger' = 'primary';

  // Define si el botón está deshabilitado
  @Input() disabled : boolean = false

  // Evento que se emite cuando se hace clic en el botón
  @Output() onClick = new EventEmitter<void>();

  // Maneja el evento de clic en el botón
  handleClick(): void {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}