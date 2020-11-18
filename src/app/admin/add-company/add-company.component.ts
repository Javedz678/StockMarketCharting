import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Company } from 'src/app/classes/company';
import {CompanyService} from 'src/app/service/company.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExchangeService } from 'src/app/service/exchange.service';
import { SectorService } from 'src/app/service/sector.service';
@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

    name: String;
    turnover: String;                      
    CEO: String;
    director: String;
    about: String;
    exchange: String;
    sector: String;  
    exchangeArray:  [];  
    sectorArray:[]
  constructor(private companyservice:CompanyService, private exchangeservice:ExchangeService,private sectorService:SectorService) { }  

  submitted=false;
  ngOnInit() {
    this.submitted=false;
    this.exchangeservice.getExchangeList().subscribe(data => {
      this.exchangeArray = data;
      console.log(this.exchangeArray);
  })
    this.sectorService.getSectorlist().subscribe(data => {
      this.sectorArray = data;
      console.log(this.sectorArray);
  })
}
  companyaddform=new FormGroup({
    name:new FormControl(),  
    turnover:new FormControl(),  
    CEO:new FormControl(),
    director:new FormControl(),
    about:new FormControl(),
    exchange:new FormControl(),
    sector:new FormControl(),
  });

  saveCompany(saveCompany){  
     
    this.name=this.Name.value;
    this.turnover=this.Turnover.value;  
    this.CEO=this.cEO.value;
    this.director=this.Director.value;
    this.about=this.About.value;
    this.exchange=this.Exchange.value;
    this.sector=this.Sector.value;
    this.submitted = true;  
    this.save();  
  }
    save() {  
    this.companyservice.updateCompany1(this.name,this.turnover,this.CEO,this.director,this.about,this.exchange,this.sector)  
      .subscribe(data => {console.log(data)
      if(data !=null){
        //alert("Add successfull");
      }
      }
      , error => {console.log(error)
      alert("Error! Add failed");
      })

  }
  // original 
  // save() {  
  //   this.companyservice.createCompany(this.company)  
  //     .subscribe(data => {if(data !=null){
  //       alert("Error! Add failed");
        
  //       console.log(data)
  //     }}, error => {
  //       alert("Added successfully");
  //       console.log(error)});  
  //   this.company = new Company();  
  // }
  get Name(){  
    return this.companyaddform.get('name');  
  }  
  
  get Turnover(){  
    return this.companyaddform.get('turnover'); 
  }  
  get Director(){  
    return this.companyaddform.get('director'); 
  } 
  
  get cEO(){  
    return this.companyaddform.get('CEO');  
  }
  get About(){    
    return this.companyaddform.get('about');  
  }  
  get Exchange(){    
    return this.companyaddform.get('exchange');  
  }  
  get Sector(){    
    return this.companyaddform.get('sector');  
  } 
  addCompanyForm(){  
    this.submitted=false;  
    this.companyaddform.reset();  
  }  
  
}


