import { Component,OnInit } from '@angular/core';
import {User} from './user.model';  
import { Observable } from 'rxjs'; 
import {PagesInfo} from './pageInfo.model';
import { FormControl } from '@angular/forms';
import {DataService} from './data.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deleteThisa and that';
  users$:User[];
  pageInfo:PagesInfo[];
  searchMoviesCtrl = new FormControl();
  constructor(private _dataService:DataService,private router: Router)
  {
    // router.events.subscribe( (event: Event) => {

    //   if (event instanceof NavigationStart) {
    //       // Show loading indicator
    //   }

    //   if (event instanceof NavigationEnd) {
    //       // Hide loading indicator
    //   }

    //   if(event instanceof)

  
  }


  ngOnInit()
  {
    this._dataService.getPage().subscribe(data=> {
      this.pageInfo=data
      console.log(this.pageInfo)});
      
  }
}
