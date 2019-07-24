import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import {User} from '../user.model';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {Page} from '../page.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  dataSaved=false;
  allUsers:User[];
  pages:Page[];
  page = 1;
  next=0;
  pageSize = 4;
  collectionSize:number;

 
  key:string;
  public directionLinks:boolean=true;
  reverse:boolean=true;
  sort(key)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

  constructor(private _dataService:DataService) {}

  pageChanged(event:any)
  {
    //this.page=event
    this.page=this.page+1;
    console.log(this.page,this.next);
    //this.ngOnInit();
  }

  ngOnInit() 
  {
    // this._dataService.getCount().subscribe(data=> {
    //   this.collectionSize=data 
    //   console.log('hello',this.collectionSize)
    // });
   // console.log("The count"+this.collectionSize);
    // this.collectionSize=this..
    this._dataService.getUsers().subscribe(data=>this.allUsers=data);
  }
  

}
