import {User} from './user.model';
export class Page {
    count: number;      // total number of items
    pageIndex:number;
    next: string;       // URL of the next page
    previous: string;   // URL of the previous page
    allUsers:User[];  // items for the current page
  }