import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, NgForm, FormControl ,ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  user:User=new User();
  user2:User=new User();
  test:string;
  confirmPass:string;
  userForm:FormGroup;
  constructor(private _dataService:DataService) {
  }

  ngOnInit()
  {
    
    // this.addUserForm=this.fb.group({
    //   name:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50)])],
    //   password:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50)])],
    //   // confirmPass['',Validators.compose([Validators.required])],
    //   Email:['',Validators.compose([Validators.required,Validators.email])],
    // });
     //this.user2.id=2;
     this.user2.name='jane';
     this.user2.email_address='';
     this.user2.phone_number='';
     this.user2.job_type='';
     this.user2.password='';
     this.test="jhj";
    //  this._dataService.postUser(this.user2).subscribe(
    //   data=>{
    //     this.user2=data;
    //   }
    //);
     //console.log("user2 "+this._dataService.postUser(this.user2));
  }

  onSubmit(f: NgForm) {
    console.log("Hi");
    this.user=f.value;
    
    console.log("Hii");
    console.log(this.user.name);
    
    this._dataService.postUser(this.user).subscribe(
      data=>{
        this.user=data;
      }
    );
    f.reset(f);
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
