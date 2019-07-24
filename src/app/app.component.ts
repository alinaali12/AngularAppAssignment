import { Component,OnInit } from '@angular/core';
import {User} from './user.model';  
import { Observable } from 'rxjs'; 
import { FormControl } from '@angular/forms';
import {DataService} from './data.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deleteThisa and that';
  users$:User[];
  searchMoviesCtrl = new FormControl();
  constructor(private dataService:DataService)
  {}
  ngOnInit()
  {
  }
}
