import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Respuesta } from '../models/respuesta';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = "http://localhost:3000"
  public books: Book[] = [];
  public logueado: boolean;
  public user: User | null = null;
  public response: Respuesta
  public libros: Book

  constructor(private http:HttpClient) {
    this.books = null
    this.logueado = false
   }

   getAll(): Observable<Object> {
    return this.http.get(`${this.url}/allbooks` );
  
  }
  
   getAllBooksByUser(id_user: number): Observable<Object> {
    return this.http.get(`${this.url}/books?id_user=${id_user}`);
  }


  getOne(id_user: string, id_book?: number): Observable<any> {
    let url = `${this.url}/books?id_user=${id_user}&id_book=${id_book}`;
    return this.http.get(url);
  }
  
  add(userId: number, book: Book): Observable<Book> {
    const data = { userId, ...book };
  
    return this.http.post<Book>(`${this.url}/books`, data);
  }
  edit(updatedBook: Book): Observable<Object> {
    const url = `${this.url}/books`; 
    return this.http.put(url, updatedBook);
  }

  

  delete(id_book: number): Observable<Object> {
    const params = new HttpParams().set('id_book', id_book.toString());
    const url = `${this.url}/books`;
    return this.http.delete(url, { params });
  }





  
  }




