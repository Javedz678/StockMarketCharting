import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UserService} from '../../service/user.service'
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import {User} from '../../classes/user'
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userservice:UserService) { }  
  user: User=new User();
  submitted=false;
  ngOnInit() {
    this.submitted=false;
  }
  useraddform=new FormGroup({
    username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    password:new FormControl(),
    mobile_number:new FormControl()
    

  });

  saveUser(saveUser){  
    this.user=new User();     
    this.user.username=this.username.value;
    this.user.email=this.email.value;  
    this.user.password=this.password.value; 
    this.user.mobile_number=this.mobile_number.value;
    this.submitted = true;  
    this.save();  
  }
  save() {  
    this.userservice.createUser(this.user)  
      .subscribe(data => {if(data !=null){
      
        console.log(data)
      }}, error => {
        
        console.log(error)});   
    this.user = new User();  
  }
  addUserForm(){  
    this.submitted=false;  
    this.useraddform.reset();  
  } 
  get username(){  
    return this.useraddform.get('username');  
  }  
  
  get email(){  
    return this.useraddform.get('email');  
  }  
  
  get password(){  
    return this.useraddform.get('password');  
  }
  get mobile_number(){    
    return this.useraddform.get('mobile_number');  
  }  
}
