import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDBService {
  readonly APIUrl="http://localhost:50581/api"

  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Users');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/Users',val);
  }

  updateUser(val:any){
    return this.http.get<any>(this.APIUrl+'/Users',val);
  }

  deleteUser(val:any){
    return this.http.get<any>(this.APIUrl+'/Users'+val);
  }

  getMDList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MD');
  }

  addMD(val:any){
    return this.http.post(this.APIUrl+'/MD',val);
  }

  updateMD(val:any){
    return this.http.put<any>(this.APIUrl+'/MD',val);
  }

  deleteMD(val:any){
    return this.http.get<any>(this.APIUrl+'/MD'+val);
  }

  getUserMD(val:any){
    return this.http.get<any>(this.APIUrl+'/MD/GetUserMD/'+val);
  }

  getMDFile(author:any, title:any){
    return this.http.get<any>(this.APIUrl+'/MD/GetMDFile/'+author+'/'+title);
  }

  MDExist(author:any, title:any){
    return this.http.get<any>(this.APIUrl+'/MD/MDExist/'+author+'/'+title);
  }

}
