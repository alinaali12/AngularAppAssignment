import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {User} from './user.model'
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
//const apiUrl = 'https://localhost:44347/api/RegisteredUsers';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  count=0;
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
    return this._http.get<User>(this.apiUrl+'/RegisteredUsers/'+ usrid);
  }

  postUser(usr:User):Observable<any>
  {
    console.log("in post",this.apiUrl+'/RegisteredUsers',usr);
    return this._http.post(this.apiUrl+'/RegisteredUsers',usr);
  }



  getCount()
  {
    return this._http.get<number>(this.apiUrl+'/RegisteredUsers/GetCount');
  }
  
}
