import { Component,OnInit } from '@angular/core';
import { FrontService } from './services/front.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Subscription } from 'rxjs/Rx';
import {TruncatePipe} from './truncate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categorys: any=[];
  title = 'app';
  constructor(private frontService: FrontService) { }

  ngOnInit() {
  this.frontService.getMenu().subscribe(res => {
    this.categorys = res;
    console.log(this.categorys);
  })
}
}
