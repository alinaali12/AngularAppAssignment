import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import {User} from '../user.model';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {PagesInfo} from '../pageInfo.model';
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

  pageInfo: PagesInfo[];
  pageChanged(event:any)
  {
    //this.page=event
    this.page=this.page+1;
    //console.log(this.page,this.next);
    //this.ngOnInit();
  }

  ngOnInit() 
  {
    this._dataService.getUsers().subscribe(data=>this.allUsers=data);
    // this._dataService.getPage().subscribe(data=> 
    //   {
    //     this.setPageInfo(data);
    //       // for( var i = 0; i < this.pageInfo.length; i++) 
    //       // {
    //       // console.log("i= "+i+this.pageInfo[i].permission);
    //       // }
    //     });
    //   }
    //   setPageInfo(pages: PagesInfo[]) {
    //     this.pageInfo = pages;
    //     console.log('m',this.pageInfo);
    //   }
  }

}