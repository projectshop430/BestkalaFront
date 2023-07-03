import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-shopsingleproduct',
  templateUrl: './shopsingleproduct.component.html',
  styleUrls: ['./shopsingleproduct.component.css']
})
export class ShopsingleproductComponent implements OnInit  {
  offercartempty=[
    {id:1,address:"./assets/img/products/07.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"20%"},
      {id:2,address:"./assets/img/products/08.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
      {id:3,address:"./assets/img/products/09.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
      {id:4,address:"./assets/img/products/010.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"50%"},
      {id:5,address:"./assets/img/products/011.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
      {id:6,address:"./assets/img/products/012.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
      {id:7,address:"./assets/img/products/013.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"10%"},
    ];
    titleoffercartempty="محصولات پیشنهادی برای شما";
    shopId!:number;

    constructor(private route:ActivatedRoute ,private router:Router , private location:Location){

    }
    ngOnInit(): void {
      this.shopId = this.route.snapshot.params['id'];
    }
}
