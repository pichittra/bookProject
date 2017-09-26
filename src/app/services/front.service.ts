import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request } from '@angular/http';

@Injectable()
export class FrontService {
  book: any;

  constructor(private http: Http) { }
  getMenu(): Observable<any> {
    return this.http.get
    (`http://localhost:3000/category`)
    .map((res: Response) => res.json());
  }

  getHeadBook(): Observable<any> {
    return this.http.get
    (`http://localhost:3000/headImgBook`)
    .map((res: Response) => res.json());
  }

  getCategory(categoryId): Observable<any> {
    return this.http.get
    (`http://localhost:3000/category/${categoryId}`)
    .map((res: Response) => res.json());
  }
}
