import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = "http://localhost:3000/book"
  public books: Book[] = [];
  constructor(private http:HttpClient) {
    this.books = null
   }


  getAll(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.url);
  }
  getOne(id_book:number): Observable<Object>{
    return this.http.get(`${this.url}?id_book=${id_book}`);
  }

  
  add(book: Book): Observable<Object> {
    return this.http.post(this.url, book);
  }
  edit(book: Book): Observable<Respuesta> {
    return this.http.put<Respuesta>(this.url, book);
  }


  
  delete(id_book: number): Observable<Object> {
    return this.http.request('delete', this.url, {body:{id_book:id_book}});
  }

}

