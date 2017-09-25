import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request } from '@angular/http';

@Injectable()
export class FrontService {
  book: any;

  constructor(private http: Http) { }

  getHeadBook(): Observable<any> {
    return this.http.get
    (`http://localhost:3000/books`)
    .map((res: Response) => res.json());
  }
}
