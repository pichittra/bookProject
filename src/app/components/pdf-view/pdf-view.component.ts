import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {

  //pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  pdfSrc: string = 'http://www.originlab.com/pdfs/Origin_8.1_Getting_Started_Booklet.pdf';
  page:number=5;
  constructor() { 
    $(document).ready(function(){
      $(".animate").click(function(){
          //console.log("pdf")
  
      });
  });
  }
  callBackFn(pdf: any) {
    // do anything with "pdf"
  //  alert("Success!");
 }
  ngOnInit() {
  }

}
