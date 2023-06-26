import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';


import {Injectable}   from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';


@Component({
  selector: 'app-productinsert',
  templateUrl: './productinsert.component.html',
  styleUrls: ['./productinsert.component.css']
})
export class ProductinsertComponent implements OnInit {

  model :any={};
  constructor(public accountService:ProductServiceService, private router:Router) {}
  ngOnInit(): void {}

  ProductRegister(){
 
    this.accountService.ProductRegister(this.model).subscribe(data=>{
    
      console.log(data);
    
      
    },error=>{
     
      console.log(error)
    });
  }



   

}






