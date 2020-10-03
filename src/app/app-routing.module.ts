import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstdetailComponent } from './components/gstdetail/gstdetail.component';
import { AddcompanydetailComponent } from './pages/addcompanydetail/addcompanydetail.component';
import { CompanydetailComponent } from './components/companydetail/companydetail.component';
import { AddgstComponent } from './pages/addgst/addgst.component';
import { AddscaleComponent } from './pages/addscale/addscale.component';

import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AddpurchasecardComponent } from './pages/purchase/addpurchasecard/addpurchasecard.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductComponent } from './pages/addproduct/product.component';
import { ScaledetailComponent } from './components/scaledetail/scaledetail.component';
import { PurchasecardlistComponent } from './pages/purchase/purchasecardlist/purchasecardlist.component';


const routes: Routes = [
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'addscale',
    component:AddscaleComponent
  },
  {
    path:'addgst',
    component:AddgstComponent
  },
  {
    path:'addcompanydetail',
    component:AddcompanydetailComponent
  },
  {
    path:'companydetail',
    component:CompanydetailComponent
  },
  {
    path:'gstdetail',
    component:GstdetailComponent
  },
  {
    path:'addpurchasecard',
    component:AddpurchasecardComponent
  },
  {
    path:'addpurchasecard',
    component:PurchasecardlistComponent
  },
  {
    path:'purchasecardlist',
    component:ScaledetailComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'*',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
