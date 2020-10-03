import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddgstComponent } from './pages/addgst/addgst.component';
import { AddscaleComponent } from './pages/addscale/addscale.component';
import { AddcompanydetailComponent } from './pages/addcompanydetail/addcompanydetail.component';
import { GstdetailComponent } from './components/gstdetail/gstdetail.component';
import { ScaledetailComponent } from './components/scaledetail/scaledetail.component';
import { AddpurchasecardComponent } from './pages/purchase/addpurchasecard/addpurchasecard.component';
import { PurchasecardlistComponent } from './pages/purchase/purchasecardlist/purchasecardlist.component';
import { ProductComponent } from './pages/addproduct/product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent,
    AddgstComponent,
    AddscaleComponent,
    AddcompanydetailComponent,
    GstdetailComponent,
    ScaledetailComponent,
    AddpurchasecardComponent,
    PurchasecardlistComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
