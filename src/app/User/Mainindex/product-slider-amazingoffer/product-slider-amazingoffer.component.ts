import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-slider-amazingoffer',
  templateUrl: './product-slider-amazingoffer.component.html',
  styleUrls: ['./product-slider-amazingoffer.component.css']
})
export class ProductSliderAmazingofferComponent {
  viewall:string=" مشاهده همه"
  picturepishned="./assets/img/theme/amazing-1.png"
  color1="backgroundproductslideroffer";
  color2="backgrouncolorslideroffer2";
  @Input () setcolor1!:boolean;
  @Input() setcolor2!:boolean;

  disablevalue!:boolean;

  productlist=
  [{id:1,address:"./assets/img/products/017.jpg",name:"کت مردانه",price:"199,000",category:"لباس مردانه"},
  {id:2,address:"./assets/img/products/013.jpg",name:"مانتو زنانه مدل هودی تیک تین",price:"135,000",category:" لباس زنانه"},
  {id:3,address:"./assets/img/products/09.jpg",name:"مانتو زنانه",price:"145,000",category:"لباس  زنانه"},
  {id:4,address:"./assets/img/products/010.jpg",name:"مانتو زنانه",price:"170,000",category:"لباس  زنانه"},
  {id:5,address:"./assets/img/products/011.jpg",name:"مانتو زنانه",price:"185,000",category:"لباس  زنانه"},
  {id:6,address:"./assets/img/products/019.jpg",name:"تیشرت مردانه",price:"66,000",category:"لباس مردانه"}

  ,]

}
