import { Component } from '@angular/core';

@Component({
  selector: 'app-design-showcase',
  standalone: false,
  templateUrl: './design-showcase.html',
  styleUrl: './design-showcase.scss',
})
export class DesignShowcase {

  email = '';
  password = '';
  emailValue = '';
  passwordValue = '';
  inputValue: string = '';

  handleButtonClick(name: string) {
    alert(`Click en botón: ${name}`);
  }

  handleLogin(data: any) {
    alert(`Login con: ${JSON.stringify(data)}`);
  }
}
