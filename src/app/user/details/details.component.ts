import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private userservice:UserService) { }
  
  userArray:  [];  
  ngOnInit() {
    // this.userservice.login().subscribe(data => {
    //   this.userArray = data;
    // });
  }

}
