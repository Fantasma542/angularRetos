import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userService: UserService) {
  }
  get isLoggedIn(): boolean {
    return this.userService.isLoggedInUser();
  }
}
