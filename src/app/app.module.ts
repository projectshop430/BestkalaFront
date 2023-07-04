import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HeadersignComponent } from './User/Header/Sign/headersign/headersign.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './User/Login/login/login.component';
import { RegisterComponent } from './User/Reigister/register/register.component';
import { FootersignComponent } from './User/Footer/Sign/footersign/footersign.component';
import { MenuProjectComponent } from './Menu/menu-project/menu-project.component';
import { Page404Component } from './User/Error/page404/page404.component';
import { AdvertisingpageComponent } from './User/Advertising/advertisingpage/advertisingpage.component';
import { AccountingComponent } from './User/Header/Page/account/accounting/accounting.component';
import { CartListComponent } from './User/Header/Page/Cart/cart-list/cart-list.component';
import { MenuBarComponent } from './User/Header/Page/Menu/menu-bar/menu-bar.component';
import { SearchingComponent } from './User/Header/Page/search/searching/searching.component';
import { HeaderComponent } from './User/Header/header/header.component';
import { FooterComponent } from './User/Footer/footer/footer.component';
import { ServiceitemComponent } from './User/Footer/page/serviceitem/serviceitem.component';
import { MenufooterComponent } from './User/Footer/page/menufooter/menufooter.component';
import { NewsletterComponent } from './User/Footer/page/newsletter/newsletter.component';
import { SocialsComponent } from './User/Footer/page/socials/socials.component';
import { CreditlogoComponent } from './User/Footer/page/creditlogo/creditlogo.component';
import { StartbannerComponent } from './User/Mainindex/startbanner/startbanner.component';
import { MainsliderComponent } from './User/Mainindex/mainslider/mainslider.component';
import { ProductSliderAmazingofferComponent } from './User/Mainindex/product-slider-amazingoffer/product-slider-amazingoffer.component';
import { ProductComponent } from './User/Mainindex/product/product/product.component';
import { BestsellingComponent } from './User/Mainindex/bestselling/bestselling.component';
import { CategorysectionComponent } from './User/Mainindex/categorysection/categorysection.component';
import { CategorysectionbaseComponent } from './User/Mainindex/categorysectionbase/categorysectionbase.component';
import { FeatureproductComponent } from './User/Mainindex/featureproduct/featureproduct.component';

import { PasswordchangeComponent } from './User/PasswordsChenge/passwordchange/passwordchange.component';

import { CartemptyComponent } from './User/cartempty/cartempty/cartempty.component';
import { VerifyphonenumberComponent } from './User/verifyphonenumber/verifyphonenumber/verifyphonenumber.component';
import { ShopcompleteComponent } from './User/shop/shopcomplete/shopcomplete.component';
import { ShopsingleproductComponent } from './User/shop/shopsingleproduct/shopsingleproduct.component';
import { ShopsingleproductinfomationComponent } from './User/shop/shopsingleproductinfomation/shopsingleproductinfomation.component';
import { ShopporseshComponent } from './User/shop/shopporsesh/shopporsesh.component';



import { RouterModule } from '@angular/router';



import {FormsModule} from '@angular/forms'



import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


import { ListsComponent } from './Admin/lists/lists.component';

import { ProductinsertComponent } from './User/productinsert/productinsert.component';
import { RoleComponent } from './Admin/role/role.component';
import { AddRoleComponent } from './Admin/role/add-role/add-role.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeadersignComponent,
    FootersignComponent,
    MenuProjectComponent,
    Page404Component,
    AdvertisingpageComponent,
    AccountingComponent,
    CartListComponent,
    MenuBarComponent,
    SearchingComponent,
    HeaderComponent,
    FooterComponent,
    ServiceitemComponent,
    MenufooterComponent,
    NewsletterComponent,
    SocialsComponent,
    CreditlogoComponent,
    StartbannerComponent,
    MainsliderComponent,
    ProductSliderAmazingofferComponent,
    ProductComponent,
    BestsellingComponent,
    CategorysectionComponent,
    CategorysectionbaseComponent,
    FeatureproductComponent,

    PasswordchangeComponent,

    CartemptyComponent,
      VerifyphonenumberComponent,
      ShopcompleteComponent,
      ShopsingleproductComponent,
      ShopsingleproductinfomationComponent,
      ShopporseshComponent,

 
 
    RegisterComponent,
 
    ListsComponent,

    ProductinsertComponent,
      RoleComponent,
      AddRoleComponent,

 
   
   



  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    HttpClientModule,
    RouterModule,
      FormsModule,
     ToastrModule.forRoot({
     positionClass:'toast-bottom-right'
     })


  ],

  providers: [
  { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
