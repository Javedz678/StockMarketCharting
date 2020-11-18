import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.css']
})
export class CompareDetailsComponent implements OnInit {
  exchangeArray:[];
  companyArray:[];
  constructor(private companyservice:CompanyService, private exchangeservice:ExchangeService) { };
  comparedetailsform=new FormGroup({  
    name1:new FormControl(),  
    name2:new FormControl()
}); 

 ngOnInit() {
  this.submitted=false;
  this.exchangeservice.getExchangeList().subscribe(data => {
    this.exchangeArray = data;
    console.log(this.exchangeArray);
})
this.companyservice.getCompanyList().subscribe(data => {
  this.companyArray= data;
});
}

 Id1:String;
 Id2:String;
 submitted=false;
 companyArray1:  [];
 companyArray2:  [];
 compare(compare){
    this.Id1=this.name1.value;
    this.Id2=this.name2.value;
    this.submitted = true; 
    this.makeRequest1(this.Id1);
    this.makeRequest2(this.Id2);
 }
 makeRequest1(id:String){

  this.companyservice.getCompany(id).subscribe(data => {
    this.companyArray1= data;
  });
  
}
makeRequest2(id:String){

  this.companyservice.getCompany(id).subscribe(data => {
    this.companyArray2= data;
  });


  

}
get name1(){
  return this.comparedetailsform.get('name1'); 
}

get name2(){
  return this.comparedetailsform.get('name2'); 
  
}
}