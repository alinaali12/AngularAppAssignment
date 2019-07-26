import { Directive,ElementRef,OnInit } from '@angular/core';
import {PagesInfo} from './pageInfo.model';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective implements OnInit{

  url:string;
  name:string;
  location:Location;
  pageInfo: PagesInfo[];
  pagePermission: boolean;
  constructor(private _dataService:DataService,location:Location,private el: ElementRef,private router: Router) 
  {
    this.url="http://localhost:4200/";
    this.location=location;
  }

  // tslint:disable-next-line: typedef-whitespace
  validate(pageInfo: PagesInfo[])
  { 
    console.log('m',this.pageInfo[0].pageURL);
    for( var i = 0; i < this.pageInfo.length; i++) 
    {
      if(pageInfo[i].pageURL==this.location.path())
      {
        console.log("pageInfo[i].PageURL ",pageInfo[i].pageURL);
        console.log("this.location.path() ",this.location.path());
        if(pageInfo[i].permission==false)
        {
          console.log(i,"pageInfo[i].pageURL ",pageInfo[i].pageURL,"pageInfo[i].permission ",pageInfo[i].permission);
          console.log("path ",this.location.path);
          
          this.router.navigateByUrl('error');
          console.log("path() ",this.location.path());
        }
      }
      
      //console.log("i= "+i+this.pageInfo[i].permission);
    }
  }
  
  
  ngOnInit()
  {
    console.log("path ",this.location.path());
    
    this._dataService.getPage().subscribe(data=> 
      {
        this.setPageInfo(data);
      });
  }

  setPageInfo(pages: PagesInfo[]) {
    this.pageInfo = pages;
    console.log('m',this.pageInfo);
    this.validate(this.pageInfo);
  }

}
