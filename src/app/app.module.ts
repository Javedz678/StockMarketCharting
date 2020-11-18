import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { UploadComponent } from './admin/upload/upload.component';
import { DetailsComponent } from './user/details/details.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { IpoListComponent } from './admin/ipo-list/ipo-list.component';
import { CompareSectorsComponent } from './user/compare-sectors/compare-sectors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserloginComponent } from './common/userlogin/userlogin.component'; 

import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddStockExchangeComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    UserComponent,
    CompareDetailsComponent,
    CompareChartsComponent,
    UploadComponent,
    DetailsComponent,
    UpdateIpoComponent,
    ManageIpoComponent,
    ListCompanyComponent,
    UpdateDetailsComponent,
    IpoListComponent,
    CompareSectorsComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FusionChartsModule,
    RouterModule.forRoot([  
      {  
        path : '',  
        component : SignInComponent   
      },  
      {  
        path : 'login',  
        component : SignInComponent    
      },  
      {  
        path : 'signup',  
        component : SignUpComponent   
      },  
      {  
        path : 'admin',  
        component : AdminComponent  
      }  
    ])  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
