import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {User} from './user.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {PagesInfo} from './pageInfo.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
//const apiUrl = 'https://localhost:44347/api/RegisteredUsers';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  count=0;
  resp:number;
  apiUrl='https://localhost:44347/api';
  constructor(private _http:HttpClient) { }

  getUsers():Observable<User[]>
  {
    return this._http.get<User[]>(this.apiUrl+'/RegisteredUsers');
  }

  getUserPagination(pageIndex=1,pageSize=5)
  {
    return this._http.get<User>(this.apiUrl+'/RegisteredUsers/GetAll?pageIndex='+pageIndex+'&pageSize='+pageSize );
  }

  //function to get users by id
  getUserById(usrid):Observable<any>
  {
    console.log("my url",this.apiUrl+'/RegisteredUsers/'+ usrid);
    console.log("in post",this._http.get<User>(this.apiUrl+'/RegisteredUsers/'+ usrid));
    return this._http.get<User>(this.apiUrl+'/RegisteredUsers/'+ usrid);
  }

  postUser(usr:User):Observable<any>
  { 
    console.log("in post",this.apiUrl+'/RegisteredUsers',usr);
    return this._http.post(this.apiUrl+'/RegisteredUsers',usr);
  }

  getPage():Observable<PagesInfo[]>
  {
    //console.log('Suser',this._http.get<PagesInfo[]>(this.apiUrl+'/AngularPages'));
    return this._http.get<PagesInfo[]>(this.apiUrl+'/AngularPages');
   
  }

  loginUser(email:string,pass:string):Observable<number>
  {
    var fullUrl = this.apiUrl+'/RegisteredUsers/verifyEmail?email='+email+'&pass='+pass;
    console.log("from web api",this._http.get<number>( fullUrl));
    return (this._http.get<number>( fullUrl));
    //return (this._http.get<resp>(this.apiUrl+'/RegisteredUsers/'+ fullUrl));
    // var obj=this._http.get(fullUrl);
    // console.log(obj.subscribe.toString);
    //return this._http.get<string>(fullUrl);
  }

  
  
}
