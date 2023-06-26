import { Component } from '@angular/core';

@Component({
  selector: 'app-featureproduct',
  templateUrl: './featureproduct.component.html',
  styleUrls: ['./featureproduct.component.css']
})
export class FeatureproductComponent {
  title:string="پیشنهاد ما";
  FeatureProduct=[
    {id:1,address:"./assets/img/products/017.jpg",name:"کت مردانه",price:"199,000",category:"لباس مردانه"},
    {id:2,address:"./assets/img/products/018.jpg",name:"مانتو زنانه مدل هودی تیک تین",price:"135,000",category:" لباس زنانه"},
    {id:3,address:"./assets/img/products/019.jpg",name:"مانتو زنانه",price:"145,000",category:"لباس  زنانه"},
    {id:4,address:"./assets/img/products/020.jpg",name:"مانتو زنانه",price:"170,000",category:"لباس  زنانه"},
    {id:5,address:"./assets/img/products/021.jpg",name:"مانتو زنانه",price:"185,000",category:"لباس  زنانه"},
    {id:6,address:"./assets/img/products/022.jpg",name:"تیشرت مردانه",price:"66,000",category:"لباس مردانه"},
    {id:7,address:"./assets/img/products/020.jpg",name:"مانتو زنانه",price:"170,000",category:"لباس  زنانه"},
    {id:8,address:"./assets/img/products/021.jpg",name:"مانتو زنانه",price:"185,000",category:"لباس  زنانه"},
    {id:9,address:"./assets/img/products/022.jpg",name:"تیشرت مردانه",price:"66,000",category:"لباس مردانه"}
  ]
}
