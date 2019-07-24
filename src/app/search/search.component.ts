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
  allUserss:User;
  public usrId:number;
  constructor(private _dataService:DataService) { }
  ngOnInit() 
  {
    
  }
  fun()
  {
    this._dataService.getUserById(this.usrId).subscribe(data=> {
      this.allUserss=data;
      console.log('user',this.allUserss=data)});
  }

}
