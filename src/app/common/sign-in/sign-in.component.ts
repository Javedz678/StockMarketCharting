import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
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
  loginAdminForm = new FormGroup({  
    username : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required),  
}); 
loginUserForm = new FormGroup({  
  usernameU : new FormControl('' , Validators.required),  
  passwordU : new FormControl('' , Validators.required),  
}); 
loginAdmin(loginAdmin){
  this.userName=this.username.value;
  this.password=this.passWord.value;
  this.makeRequest(this.userName,this.password,"admin");
  this.submitted=true;
}
// loginUser(loginUser){
//   this.userName=this.usernameU.value;
//   this.password=this.passWordU.value;
//   this.makeRequestU(this.userName,this.password,"user");
// }

private makeRequest(username:String,password:String,type:String){
 
  this.userservice.login(username,password,type).subscribe(  
    response => {  
      
      console.log(response);
        let result =  response; 
         
        if(response!=null)  
        {  
          console.log("ok");
          
          this.router.navigate(['/admin']); 
        }  
        else
        {  
          this.submitted=false;  
          //alert("please register before login Or Invalid combination of Email and password");  
        }  
      }
    // ,  
    // error => {  
    //     console.log("Error in authentication");  
    //     this.submitted=false;  
    //     //alert("please register before login Or Invalid combination of Email and password");  
    // }  
  );  
}
// private makeRequestU(username:String,password:String,type:String){
 
//   this.userservice.login(username,password,type).subscribe(  
//     response => {  
      
//       console.log(response);
//         let result =  response; 
         
//         if(response!=null)  
//         {  
//           console.log("ok");
//           this.router.navigate(['/user']); 
//         }  
//         else
//         {  
//           this.submitted=false;  
//           //alert("please register before login Or Invalid combination of Email and password");  
//         }  
         
//     },  
//     error => {  
//         console.log("Error in authentication"); 
//         this.submitted=false;  
//        // alert("please register before login Or Invalid combination of Email and password");   
//     }  
//   );  
// }
 
get username(){  
  return this.loginAdminForm.get('username');  
}  
get passWord(){  
  return this.loginAdminForm.get('password');  
}  
get usernameU(){  
  return this.loginUserForm.get('usernameU');  
}  
get passWordU(){  
  return this.loginUserForm.get('passwordU');  
} 
}
