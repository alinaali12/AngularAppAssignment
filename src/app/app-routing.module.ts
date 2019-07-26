import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {SearchComponent} from './search/search.component';
import {AddUsersComponent} from './add-users/add-users.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [{path:'user',component:UserComponent},
                        {path:'search',component:SearchComponent},
                        {path:'add-users',component:AddUsersComponent},
                        {path:'error',component:ErrorPageComponent},
                        {path:'login',component:LoginComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
