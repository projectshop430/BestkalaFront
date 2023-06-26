import { Component } from '@angular/core';

@Component({
  selector: 'app-cartempty',
  templateUrl: './cartempty.component.html',
  styleUrls: ['./cartempty.component.css']
})
export class CartemptyComponent {
title:string='سبد خرید شما خالیست!';
description:string='می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:';

namemenue1:string='لیست مورد علاقه من';
namemenue2:string='محصولات شگفت‌انگیز';
namemenue3:string='محصولات پرفروش روز';

descriptionbottom:string='ادامه خرید در دیدیکالا';
listbanner=[
{id:1,address:"../assets/img/banner/small-banner-1.jpg",alt:"small-banner-1"},
{id:2,address:"../assets/img/banner/small-banner-2.jpg",alt:"small-banner-2"},
{id:3,address:'./assets/img/banner/small-banner-3.jpg',alt:'small-banner-3'},
{id:4,address:'./assets/img/banner/small-banner-4.jpg',alt:'small-banner-4'},
]
titleshopammazing:string="احتمالا به محصولات زیر هم علاقه‌مند باشید";
viewall:string="مشاهده همه";

//----------------------------------------------------//
//start like cartempty//
 likecartempty=[
{id:1,address:"./assets/img/products/07.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"20%"},
  {id:2,address:"./assets/img/products/08.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
  {id:3,address:"./assets/img/products/09.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
  {id:4,address:"./assets/img/products/010.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"50%"},
  {id:5,address:"./assets/img/products/011.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
  {id:6,address:"./assets/img/products/012.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
  {id:7,address:"./assets/img/products/013.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"10%"},
];
titlelikecartempty="احتمالا به محصولات زیر هم علاقه‌مند باشید";
//end  like  cartempty//
//----------------------------------------------------//

//start offer cartempty//
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
//end  offer cartempty//
//----------------------------------------------------//
}

