import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _dataService:DataService) { }
  
  user:User=new User();
  email:string;
  password:string;
  message:string;
  resp:number;

  ngOnInit() {
  }

  onSubmit(f: NgForm)
  {
    this.email=f.value.email_address;
    console.log("this.email is ",this.email);

    this.password=f.value.password;
    console.log("this.password is ",this.password);
    
    //this._dataService.loginUser(this.email,this.password);//.subscribe(data=>{this.message=this.message,console.log("message from api",this.message)});

    console.log(this._dataService.loginUser(this.email,this.password).subscribe(data=>this.resp=data));
    

    // this._dataService.postUser(this.user).subscribe(
    //   data=>{
    //     this.user=data;
    //   }
    // );
    // f.reset(f);
  }

  resetForm(form:NgForm)
  {
    if(form!=null)
    {

    }
    form.reset();
    this.user={
      id:0,
      name:'',
      password:'',
      job_type:'',
      email_address:'',
      phone_number:''
      
    }
 }

}
