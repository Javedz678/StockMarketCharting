import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UploadComponent } from './admin/upload/upload.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { DetailsComponent } from './user/details/details.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { CompareSectorsComponent } from './user/compare-sectors/compare-sectors.component'
import { from } from 'rxjs';
import { UserloginComponent } from './common/userlogin/userlogin.component';
const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path: 'userlogin', component: UserloginComponent},
  
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: UploadComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'add-company', component: AddCompanyComponent },
      { path: 'update-company', component: UpdateCompanyComponent },
      { path: 'add-stock-exchange', component: AddStockExchangeComponent },
      { path: 'list-company', component: ListCompanyComponent },
      { path: 'update-ipo', component: UpdateIpoComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'details', component: DetailsComponent},
      { path: 'update-user', component: UpdateDetailsComponent},
      { path:'compare-charts', component: CompareChartsComponent },
      { path: 'manage-ipo', component: ManageIpoComponent},
      { path: 'compare-details', component: CompareDetailsComponent },
      { path: 'compare-sectors', component: CompareSectorsComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
