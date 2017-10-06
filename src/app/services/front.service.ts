import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Request } from '@angular/http';

@Injectable()
export class FrontService {
  book: any;
  detailBook: any;
  dataFront: any;

  constructor(private http: Http) {
    this.dataFront = Observable.forkJoin(
      this.getMenu(),
      this.getHeadBook(),
      this.getNewArrivals(),
      this.getBestSeller()
    )
  }


  //show Menu(Category)
  getMenu(): Observable<any> {
    return this.http.get
      (`http://localhost:3000/category`)
      .map((res: Response) => res.json());
  }

  //show Head
  getHeadBook(): Observable<any> {
    return this.http.get
      (`http://localhost:3000/headImgBook`)
      .map((res: Response) => res.json());
  }

  //show newArrivals
  getNewArrivals(): Observable<any> {
    return this.http.get
      (`http://localhost:3000/newArrivals`)
      .map((res: Response) => res.json());
  }

  //show best Seller
  getBestSeller(): Observable<any> {
    return this.http.get
      (`http://localhost:3000/bestSeller`)
      .map((res: Response) => res.json());
  }
  //show books with category
  getCategory(categoryId): Observable<any> {
    return this.http.get
      (`http://localhost:3000/book?categoryId=${categoryId}`)
      .map((res: Response) => res.json());
  }
  showDetail(bookId) : Observable<any> {
    return this.http.get
    (`http://localhost:3000/book/${bookId}`)
    .map((res: Response) => res.json());
  }
}
