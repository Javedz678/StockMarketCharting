import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  submitted: boolean;
  isupdated = false; 
  
  gotUser:[];
  status:boolean;
  check:boolean;
  constructor(private userservice:UserService) { }
  
  ngOnInit() {
    this.submitted=false;
    this.isupdated=false; 
    this.check=true;
    this.status=false;
  
  }
  updateUser(username: String, password:String, newPassword:String,email:String,mobileNumber:String){  
    this.userservice.updateUser(username,password,newPassword,email,mobileNumber,"user")
      .subscribe(  
        data => {  
          this.status=data;           
        },  
        error => console.log(error)); 
  } 
    username: String;
    password: String;                      
    newPassword: String;
    email: String;
    mobileNumber: String;
                      
  userupdateform=new FormGroup({                      
    
    username: new FormControl(), 
    password: new FormControl(),                     
    newPassword: new FormControl(), 
    email: new FormControl(), 
    mobileNumber: new FormControl()
  });
  

  getUser(username:any,password: any){

    
    
    this.userservice.login(username.value,password.value,"user").subscribe(data =>{  
      this.gotUser = data;  
       console.log(this.gotUser);
       if(data!=null)  
       {  
        this.check = true;
        
       }  
       else
       {  
        this.check = false;

       }  
      }
        ,error => {  
        console.log("Error in authentication");  
         this.check = false;
        //alert("please register before login Or Invalid combination of Email and password");  
    } 
      ) 
  }

  updateUsr(updstu){
       
    this.username=this.Username.value;
    this.password=this.Password.value;  
    this.getUser(this.username,this.password);
    this.newPassword=this.NewPassword.value;
    this.email=this.Email.value;
    this.mobileNumber=this.MobileNumber.value;
    this.submitted = true; 
     
    this.updateUser(this.username,this.password,this.newPassword,this.email,this.mobileNumber);
  }
  
  get Username(){  
    return this.userupdateform.get('username');  
  }  
  
  get Password(){  
    return this.userupdateform.get('password'); 
  }  
  get NewPassword(){  
    return this.userupdateform.get('newPassword'); 
  } 
  
  get Email(){  
    return this.userupdateform.get('email');  
  }
  
  get MobileNumber(){    
    return this.userupdateform.get('mobileNumber');  
  } 
}
