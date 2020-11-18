import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Company } from 'src/app/classes/company';
import { CompanyService } from 'src/app/service/company.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private companyservice:CompanyService,private _location:Location) { }  
  deleteMessage=false;  
  companyArray: any[] = [];  
  companylist:any;  
  isupdated = false;   
  submitted=false;
  companies: Observable<Company[]>;  
  company : Company=new Company();  
  ngOnInit() {
    this.submitted=false;
    this.isupdated=false; 
    this.companyservice.getCompanyList().subscribe(data =>{  
      this.companies = data;   
       
       console.log(this.companies);
      })  
  }
  deleteCompany(id: String) {  
    this.companyservice.deleteCompany(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.companyservice.getCompanyList().subscribe(data =>{  
            this.companies =data  
            
            })  
        },  
        error => console.log(error));  
        location.reload();
  }  
  updateCompany(id: String){  
    this.companyservice.getCompany(id)
      .subscribe(  
        data => {  
          this.companylist=data             
        },  
        error => console.log(error)); 
  } 
        

    name: String;
    turnover: String;                      
    ceo: String;
    director: String;
    about: String;
    exchange: String;
    sector: String;                     
  companyupdateform=new FormGroup({                      
    name:new FormControl(),  
    turnover:new FormControl(),  
    ceo:new FormControl(),
    director:new FormControl(),
    about:new FormControl(),
    exchange:new FormControl(),
    sector:new FormControl(),
  });
  updateCom(updstu){
       
    this.company.name=this.Name.value;
    this.company.turnover=this.Turnover.value;  
    this.company.CEO=this.Ceo.value;
    this.company.director=this.Director.value;
    this.company.about=this.About.value;
    this.company.exchange=this.Exchange.value;
    this.company.sector=this.Sector.value;
    this.submitted = true;  
    this.companyservice.updateCompany(this.company.name,this.company,this.company.CEO).subscribe(  
      data => {       
        this.isupdated=true;  
        this.companyservice.getCompanyList().subscribe(data =>{  
          this.companies =data  
          })  
      },  
      error => console.log(error));  
      
  }
  // save() {  
  //   this.companyservice.updateCompany(this.name,this.turnover,this.CEO,this.director,this.about,this.exchange,this.sector)  
  //     .subscribe(data => {console.log(data)
  //     if(data !=null){
  //       alert("Update successfull");
  //     }
  //     }
  //     , error => {console.log(error)
  //     alert("Error! update failed");
  //     })

  // }
  get Name(){  
    return this.companyupdateform.get('name');  
  }  
  
  get Turnover(){  
    return this.companyupdateform.get('turnover'); 
  }  
  get Director(){  
    return this.companyupdateform.get('director'); 
  } 
  
  get Ceo(){  
    return this.companyupdateform.get('ceo');  
  }
  
  get About(){    
    return this.companyupdateform.get('about');  
  }  
  get Exchange(){    
    return this.companyupdateform.get('exchange');  
  }  
  get Sector(){    
    return this.companyupdateform.get('sector');  
  } 

  backClicked() {
    this._location.back();
  }
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
