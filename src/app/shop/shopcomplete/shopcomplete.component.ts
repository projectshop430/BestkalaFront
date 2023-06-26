import { Component } from '@angular/core';

@Component({
  selector: 'app-shopcomplete',
  templateUrl: './shopcomplete.component.html',
  styleUrls: ['./shopcomplete.component.css']
})
export class ShopcompleteComponent {
  codepay:string="DDC-75007560";
  title:string="سفارش";
  discription:string=" با موفقیت در سیستم ثبت شد";
  complatedesctiption:string="سفارش نهایتا تا یک روز آماده ارسال خواهد شد.";
  deliverynametitle:string="نام تحویل گیرنده";
  deliveryname:string="مجتبی حنایی ";
  phonenumbertitle:string=" شماره تماس ";
  phonenumber:string="09397149558";
  Numberproducttitle:string="تعداد مرسوله";
  Numberproduc:number=1;
  totalpricetitle:string="مبلغ کل";
  totalprice:string="۴,۴۳۹,۰۰۰";
  money:string="تومان";
  Paymenttitle:string="روش پرداخت";
  Payment:string="پرداخت اینترنتی (موفق)";
  typepay="وضعیت سفارش";
  paydisec:string="پرداخت شد";
  addresstitle:string="آدرس ";
address:string=" استان خراسان شمالی ، شهربجنورد، خراسان شمالی-بجنورد"
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
}
