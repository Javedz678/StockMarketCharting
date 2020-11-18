import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExchangeService } from 'src/app/service/exchange.service';
import { Stockexchange } from 'src/app/classes/stockexchange';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  constructor(private _location: Location,private exchangeservice:ExchangeService) { }
  exchange : Stockexchange=new Stockexchange();  
  submitted = false;  
  ngOnInit() {
    this.submitted=false;  
  }
  exchangesaveform=new FormGroup({  
    name:new FormControl(),  
    about:new FormControl(),  
    address:new FormControl(),
  });  
  saveExchange(saveExchange){
    this.exchange=new Stockexchange();
    this.exchange.about=this.about.value;
    this.exchange.address=this.address.value;
    this.exchange.stockExchangeName=this.name.value;
    this.submitted = true;  
    this.save();
  }
  save() {  
    this.exchangeservice.createExchange(this.exchange)  
      .subscribe(data => {if(data !=null){
     
        console.log(data)
      }}, error => {
        
        console.log(error)});  
    this.exchange = new Stockexchange();  
  } 
  get address(){  
    return this.exchangesaveform.get('address');  
  } 
  get about(){  
    return this.exchangesaveform.get('about');  
  } 
  get name(){  
    return this.exchangesaveform.get('name');  
  } 
  addExchangeForm(){  
    this.submitted=false;  
    this.exchangesaveform.reset();  
  }  

  backClicked() {
    this._location.back();
  }

}
