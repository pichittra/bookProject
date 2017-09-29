import { Component,OnInit } from '@angular/core';
import { FrontService } from './services/front.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Rx';
import {TruncatePipe} from './truncate';
import { RouterModule, Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category: any=[];
  categorys: any=[]
  title = 'app';
  slides = [
    { caption: "The Piper at the Gates of Dawn" },
    { caption: "A Saucerful of Secrets" },
    { caption: "Music from the Film More" },
    { caption: "Ummagumma" },
    { caption: "Atom Heart Mother" },
    { caption: "Meddle" }
  ];

  constructor(private frontService: FrontService,
    private route: ActivatedRoute,
    private router: Router) { 
      
    }

  ngOnInit() {
  this.frontService.getMenu().subscribe(res => {
    this.categorys = res;
    console.log(this.categorys);
  })
}

}
