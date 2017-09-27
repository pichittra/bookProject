import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class BackService {

  book: any;
  constructor(private http: Http) { }

  addBook(data): Observable<any> {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // let body = JSON.stringify(data);
    return this.http.post
    (`http://localhost:3000/book`, data)
    .map((res: Response) => res.json());
  }
}
