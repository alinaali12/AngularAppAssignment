import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit 
{
  dataSaved=false;
  SelectedUsers:User;
  public usrId:number;
  constructor(private _dataService:DataService) { }
  ngOnInit() 
  {
  }
  fun(user:User)
  {
    this._dataService.getUserById(this.usrId).subscribe(data=> {
    this.SelectedUsers=data,this.fun(this.SelectedUsers)});
    this.SelectedUsers=user;
    console.log("search user",user);
  }

}
