import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000"
  public books: Book[] = [];
  public logueado: boolean;
  public user: User | null = null;
  private userId: number | null = null;
  public loggedInUser: User | null = null
  public resp: Respuesta

  
  constructor(private http: HttpClient, private bookService: BooksService) { 
    
    this.books = null
    this.logueado = false
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  }
  setUser(user: any) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
  
  login(user: User): Observable<Object> {
   this.logueado = true
    this.loggedInUser = user;
    return this.http.post(`${this.url}/login`, user);
    
  }

  getCurrentUser(): User | null {
    return this.loggedInUser;
  }

  setUserId(id: number) {
    this.userId = id;
  }

  getUserId(): number | null {
    return this.userId;
  }
  updateUserInfo(user: any): Observable<any> {
    const url = `${this.url}/user`; // Endpoint para actualizar usuario
    return this.http.put(url, user);
  }

  isLoggedInUser() {
    return this.logueado;
  }

}
