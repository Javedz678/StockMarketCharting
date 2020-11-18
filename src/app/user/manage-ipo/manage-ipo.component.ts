import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';

@Component({
  selector: 'manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {

  constructor(private iposervice:IpoService) { }
  ipoArray:  [];  
  ngOnInit() {
    this.iposervice.getIpoList().subscribe(data => {
      this.ipoArray = data;
    });
  }

}
