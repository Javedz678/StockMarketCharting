import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IpoService } from 'src/app/service/ipo.service';
import { Ipo } from 'src/app/classes/ipo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SectorService } from 'src/app/service/sector.service';
import { ExchangeService } from 'src/app/service/exchange.service';
@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  
  exchangeArray: [];

  constructor(private _location: Location,private iposervice:IpoService,private exchangeservice:ExchangeService) { }
  ipo : Ipo=new Ipo();  
  submitted = false;  
  ngOnInit() {
    this.submitted=false;  
    this.exchangeservice.getExchangeList().subscribe(data => {
      this.exchangeArray = data;
      console.log(this.exchangeArray);
  })
  }
  iposaveform=new FormGroup({  
    name:new FormControl(),  
    exchange:new FormControl(),  
    pricePerShare:new FormControl(),
    noOfShares:new FormControl(),
    address:new FormControl(),
    date:new FormControl()  
  });  
  saveIpo(saveIpo){
    this.ipo=new Ipo();
    this.ipo.address=this.address.value;
    this.ipo.companyName=this.name.value;
    this.ipo.date=this.date.value;
    this.ipo.exchange=this.exchange.value;
    this.ipo.pricePershare=this.pricePerShare.value;
    this.ipo.totalNoshare=this.noOfShares.value;
    this.submitted = true;  
    this.save();
  }
  save() {  
    this.iposervice.createIpo(this.ipo)  
      .subscribe(data => console.log(data), error => {
        console.log(error);
        alert("Added successfully!");});  
    this.ipo = new Ipo();  
  } 
   
  get name(){  
    return this.iposaveform.get('name');  
  }  
  
  get exchange(){  
    return this.iposaveform.get('exchange');  
  }  
  
  get pricePerShare(){  
    return this.iposaveform.get('pricePerShare');  
  }   
  get noOfShares(){  
    return this.iposaveform.get('noOfShares');  
  }  
  get address(){  
    return this.iposaveform.get('address');  
  }  
  get date(){  
    return this.iposaveform.get('date');  
  }  
  backClicked() {
    this._location.back();
  }
  addIpoForm(){  
    this.submitted=false;  
    this.iposaveform.reset();  
  } 

}
