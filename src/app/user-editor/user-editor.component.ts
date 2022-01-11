import { Component, OnInit, ViewChild, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SharedDBService } from '../shared-db.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  public display: any=[];
  public html: any;
  @ViewChild('postform') postform: ElementRef;
  @ViewChildren('preview') preview: ElementRef;
  constructor(private service:SharedDBService, private renderer: Renderer2, private router:Router, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.setDisplay();
  }

  setDisplay(): void {
    this.service.getMDFile(localStorage.getItem('Author'),localStorage.getItem('MDName')).subscribe(data=>
      {
        this.display=data;
        this.renderer.setProperty(this.postform.nativeElement, 'value',this.display[0].MDFile );
      });
  }

  saveMD(): void {
    let file = this.display[0].MDFile.replaceAll("'","''");
    let val = {MDName:localStorage.getItem('MDName'),Author:localStorage.getItem('Author'),MDFile:file,MDId:this.display[0].MDId};
    this.service.updateMD(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  toDashboard(): void {
    this.router.navigateByUrl('/dashboard').then();
  }

  previewHTML(): void {
    let file ='data:text/html;charset=utf-8,' + encodeURI(this.display[0].MDFile);
    this.html = this.domSanitizer.bypassSecurityTrustResourceUrl(file);
  }

  
  


}
