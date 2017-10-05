import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BackService {

  book: any;
  constructor(private http: Http) { }
  addBook(data): Observable<any> {
    return this.http.post
      (`http://localhost:3000/book`, data)
      .map((res: Response) => res.json());
  }

  setScoreVote(bookId, book): Observable<any> {
    return this.http.put
      (`http://localhost:3000/book/${bookId}`, book)
      .map((res: Response) => res.json());
  }
}
