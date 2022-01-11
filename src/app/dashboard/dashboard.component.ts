import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDBService } from '../shared-db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userDetails: any;
  public userMDList: any=[];
  public regexp = new RegExp('^[a-zA-Z0-9_-]*$');
  public regexp2 = new RegExp('(.|\s)*\S(.|\s)*');
  private same: any;

  constructor(private router: Router, private service:SharedDBService) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
      localStorage.setItem('Author', this.userDetails?.id);
    } else {
      this.signOut();
    }

    this.refreshUserMDList();
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

  refreshUserMDList(){
    this.service.getUserMD(this.userDetails?.id).subscribe(data=>{
      this.userMDList=data;
    });
  }

  viewMD(title:any): void {
    localStorage.setItem('MDName',title);
    this.router.navigateByUrl('/user-editor').then();
  }


  // validTitle(title:any): boolean {

  //   this.sameTitle(title); 
  //   let valid: boolean=true;
  //   let samename = JSON.parse(this.same[0]);

  //   if(samename.Column1> 0){
  //     valid = false;
  //     return valid;
  //   }
  //   if(!(this.regexp.test(title))){
  //     valid = false;
  //     return valid;
  //   }
  //   return valid;
  // }

  newMD(): void {
    let title = prompt('Enter the name of this markdown (Do not include extension)');
    let val = {MDName:title,Author:localStorage.getItem('Author'),MDFile:''};
    if(title!==null){
      if(this.regexp.test(<string>title) && this.regexp2.test(<string>title)){
      this.service.MDExist(localStorage.getItem('Author'),title).subscribe(data=> {
        this.same = data;
          if((this.same[0].Column1 ===0)){
            this.service.addMD(val).subscribe(res=>{
              alert(res.toString());
          });
          this.viewMD(title);
          }
          else{alert('Title Exists')}

      })
    }
    else{
      alert('Invalid Characters');
    }
  }
  
    
  }

}
