import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule, NgForm} from '@angular/forms';
import {UserComponent} from './user/user.component';
import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {AddUsersComponent } from './add-users/add-users.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { CustomMaterialModule } from './material.module';
import { CustomDirDirective } from './custom-dir.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    AddUsersComponent,
    CustomDirDirective,
    ErrorPageComponent,
    LoginComponent,

    //RouterModule.forRoot([])
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  providers: [HttpClientModule,DataService,Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
