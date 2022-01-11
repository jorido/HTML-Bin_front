import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  public display: any;
  public html: any;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  previewHTML(): void {
    let file ='data:text/html;charset=utf-8,' + encodeURI(this.display);
    this.html = this.domSanitizer.bypassSecurityTrustResourceUrl(file);
  }

 
}
