import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
    private apiUrl = 'http://localhost:8080/api/books';

    constructor(private http: HttpClient) {}

    getAll(): Observable<BookModel[]> {
        return this.http.get<BookModel[]>(this.apiUrl);
    }
    create(book: BookModel) {
        return this.http.post<BookModel>(this.apiUrl, book);
    }
    getById(id: number) {
        return this.http.get<BookModel>(`${this.apiUrl}/${id}`);
    }

    update(id: number, book: BookModel) {
        return this.http.put<BookModel>(`${this.apiUrl}/${id}`, book);
    }

    delete(id: number) {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}

