import { Component, OnInit } from '@angular/core';

import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  constructor(private exchangeService:ExchangeService) { }
  companyArray:  [];  
  ngOnInit() {
    this.exchangeService.getExchangeList().subscribe(data => {
      this.companyArray = data;
    });
  }

}
