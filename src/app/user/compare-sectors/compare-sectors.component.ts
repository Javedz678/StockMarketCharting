import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sectors } from 'src/app/classes/sectors';
import { SectorService } from 'src/app/service/sector.service';

@Component({
  selector: 'app-compare-sectors',
  templateUrl: './compare-sectors.component.html',
  styleUrls: ['./compare-sectors.component.css']
})
export class CompareSectorsComponent implements OnInit {

  constructor(private sectorservice:SectorService) { { 
    this.comparesectorform = new FormGroup({
      sector1: new FormControl(),
      sector2: new FormControl()
    });
 }};
  sectorArray:[]
  sectorArray1:  [];
  sectorArray2:  [];
  comparesectorform: FormGroup;
  Id1:number;
  Id2:number;

  submitted = false;  
  ngOnInit() {
    this.submitted=false;  
    this.sectorservice.getSectorlist().subscribe(data => {
      this.sectorArray = data;
      console.log(this.sectorArray);
  })
  }
  
  comparesectorform=new FormGroup({  
    name:new FormControl(),  
    about:new FormControl()
  }); 
  

  compare(compare){
    
    this.Id1=this.id1.value;
    this.Id2=this.id2.value;
    this.submitted = true; 
    this.makeRequest1(this.Id1);
    this.makeRequest2(this.Id2);
  }
  makeRequest1(id:number){

    this.sectorservice.getSector(id).subscribe(data => {
      this.sectorArray1= data;
      console.log(this.sectorArray1);
    });
    
  }
  makeRequest2(id:number){

    this.sectorservice.getSector(id).subscribe(data => {
      this.sectorArray2= data;
    });
    
  }
  get id1(){
    return this.comparesectorform.get('sector1'); 
  }
  get id2(){
    return this.comparesectorform.get('sector2'); 
  }

}
