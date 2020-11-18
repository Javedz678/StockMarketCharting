import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadFileService } from 'src/app/service/upload.service';

@Component({
  selector: 'compare-charts',
  templateUrl: './compare-charts.component.html',
  styleUrls: ['./compare-charts.component.css']
})
export class CompareChartsComponent implements OnInit {

  dataArray=[];
  
  z:string;

  
  chartData=[];
  chartData2=[];
  listofCompanies:[]; 
  companyName1="";
  companyName2="";
  dataSource: Object;
  dataSource2: Object;
  Id1: any;
  Id2: any;
  submitted: boolean;
  companyservice: any;
  companyArray1: any;
  nameArray:[];
  constructor(private uploadFileservice:UploadFileService) {
    
    
  }
  ngOnInit() {
    this.uploadFileservice.getNames().subscribe(data => {
      this.z = data;
      this.nameArray=data;
      console.log(this.nameArray);
    });
    // this.submitted=false;
  }

  comparecompaniesform=new FormGroup({  
    name1:new FormControl(),  
    name2:new FormControl()
}); 
onecompany(compare){
  this.Id1=this.name1.value;
  this.submitted = true; 
  this.makeRequest2(this.Id1);
}
compare(compare){
  this.Id1=this.name1.value;
  this.Id2=this.name2.value;
  console.log(this.Id2);
  this.submitted = true; 
  this.makeRequest1(this.Id1);
  this.makeRequest2(this.Id2);
}
makeRequest2(id:String){

  this.uploadFileservice.getData(id).subscribe(  
    response => {
    console.log(response);
    let time= response.map((response: { time: any; }) => response.time);
    let price= response.map((response: { price: any; }) => response.price);
    let name= response.map((response: { name: any; }) => response.name);
    
    let a=time;
    let b=price;
    this.companyName1=name[0];
    for (let i = 0; i < a.length; i++) {
      this.chartData2.push({
        label: a[i],
        value: b[i]
      })

    }
    const dataSource2 = {
      chart: {
        //Set the chart caption
        caption: this.companyName1,
        //Set the x-axis name
        xAxisName: "Time",
        //Set the y-axis name
        yAxisName: "Price",
        numberSuffix: " Rs",
        exportEnabled: "0",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: this.chartData2
    };
    this.dataSource2 = dataSource2;  
    },  
    error => {  
        console.log(error);  
    }  
  );

}
makeRequest1(id:String){

  this.uploadFileservice.getData(id).subscribe(  
    response => {
    console.log(response);
    let time= response.map((response: { time: any; }) => response.time);
    let price= response.map((response: { price: any; }) => response.price);
    let name= response.map((response: { name: any; }) => response.name);
    this.listofCompanies=response;
    let a=time;
    let b=price;
    this.companyName1=name[0];
    for (let i = 0; i < a.length; i++) {
      this.chartData.push({
        label: a[i],
        value: b[i]
      })
    }
    console.log(this.chartData);
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: this.companyName1,
        //Set the x-axis name
        xAxisName: "Time",
        //Set the y-axis name
        yAxisName: "Price",
        numberSuffix: " Rs",
        exportEnabled: "1",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: this.chartData
    };
    this.dataSource = dataSource;  
    },  
    error => {  
        console.log(error);  
    }  
  );

}
  get name1(){
    return this.comparecompaniesform.get('name1'); 
  }
  
  get name2(){
    return this.comparecompaniesform.get('name2');
  }
  
  
}
