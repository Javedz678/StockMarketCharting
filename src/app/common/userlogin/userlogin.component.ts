import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  message="from sign in";
  userArray: [];
  userName:String;
  password:String;
  type: String;
  constructor(private userservice:UserService,private router : Router) { }  
  private user = new User();  
  submitted=false;
  ngOnInit() {
    this.submitted=false;
  }
  
  loginUserForm = new FormGroup({  
  usernameU : new FormControl('' , Validators.required),  
  passwordU : new FormControl('' , Validators.required),  
}); 

loginUser(loginUser){
  this.userName=this.usernameU.value;
  this.password=this.passWordU.value;
  this.submitted=true;  
  this.makeRequestU(this.userName,this.password,"user");
}


private makeRequestU(username:String,password:String,type:String){
 
  this.userservice.login(username,password,type).subscribe(  
    response => {  
      
      console.log(response);
        let result =  response; 
         
        if(response!=null)  
        {  
          console.log("ok");
          this.router.navigate(['/user']); 
        }  
        else
        {  
          this.submitted=false;  
          //alert("please register before login Or Invalid combination of Email and password");  
        }  
         
    }  
    // ,error => {  
    //     console.log("Error in authentication"); 
    //     alert("please register before login Or Invalid combination of Email and password");   
    // }  
  );  
} 
get usernameU(){  
  return this.loginUserForm.get('usernameU');  
}  
get passWordU(){  
  return this.loginUserForm.get('passwordU');  
} 
}
