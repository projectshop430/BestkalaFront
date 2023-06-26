import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

import { HttpClient } from '@angular/common/http';
import { userDTOs } from 'src/app/DTOs/userDTOs';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filenamestartbaner=[
  {id:1,address:"../assets/img/banner/banner-side-slider-1.jpg",name:"banner-side-slider-1"},
  {id:2,address:"../assets/img/banner/banner-side-slider-2.jpg",name:"banner-side-slider-2"}];
  mediumbanner1=[
    {id:1,address:"./assets/img/banner/medium-banner-1.jpg",name:"mediumbanner1"},
    {id:2,address:"./assets/img/banner/medium-banner-2.jpg",name:"mediumbanner2"},
];

smallbanner=[
  {id:1,address:"./assets/img/banner/small-banner-6.jpg",name:"msmall-banner-6"},
  {id:2,address:"./assets/img/banner/small-banner-6.jpg",name:"msmall-banner-6"},
  {id:3,address:"./assets/img/banner/small-banner-6.jpg",name:"msmall-banner-6"},
  {id:4,address:"./assets/img/banner/small-banner-6.jpg",name:"msmall-banner-6"},
];

StartBanner2=[
  {id:1,address:"./assets/img/banner/large-banner.jpg",name:"large-banner"},

];

brandcompany=[
  {id:1,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:2,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:3,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:4,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:1,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:2,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:3,address:"./assets/img/brand/1076.png",name:"1076"},
  {id:4,address:"./assets/img/brand/1076.png",name:"1076"},

];



  filenamemainslider=[
  {id:0,address:"./assets/img/main-slider/img-slider-2/1.jpg",name:"banner-side-slider-2",active:"active",dataslideto:"0"},
  {id:1,address:"./assets/img/main-slider/img-slider-2/2.jpg",name:"banner-side-slider-2",active:"",dataslideto:"1"},
  {id:2,address:"./assets/img/main-slider/img-slider-2/3.jpg",name:"banner-side-slider-3",active:"",dataslideto:"2"},
  {id:3,address:"./assets/img/main-slider/img-slider-2/4.jpg",name:"banner-side-slider-4",active:"",dataslideto:"3"},
  {id:4,address:"./assets/img/main-slider/img-slider-2/5.jpg",name:"banner-side-slider-5",active:"",dataslideto:"4"},
  {id:5,address:"./assets/img/main-slider/img-slider-2/6.jpg",name:"banner-side-slider-6",active:"",dataslideto:"5"},
  {id:6,address:"./assets/img/main-slider/img-slider-2/7.jpg",name:"banner-side-slider-7",active:"",dataslideto:"6"}
];
viewall:string=" مشاهده همه"
productlistn=[
{id:1,address:"./assets/img/products/017.jpg",name:"کت مردانه",price:"199,000",category:"لباس مردانه"},
{id:2,address:"./assets/img/products/018.jpg",name:"مانتو زنانه مدل هودی تیک تین",price:"135,000",category:" لباس زنانه"},
{id:3,address:"./assets/img/products/019.jpg",name:"مانتو زنانه",price:"145,000",category:"لباس  زنانه"},
{id:4,address:"./assets/img/products/020.jpg",name:"مانتو زنانه",price:"170,000",category:"لباس  زنانه"},
{id:5,address:"./assets/img/products/021.jpg",name:"مانتو زنانه",price:"185,000",category:"لباس  زنانه"},
{id:6,address:"./assets/img/products/022.jpg",name:"تیشرت مردانه",price:"66,000",category:"لباس مردانه"}
];
typeprice:string="تومان";
picturepishned="./assets/img/theme/amazing-1.png"
color="backgroundproductslideroffer"
timersetInterval=4000;
x11:string="0"

 valueid:number=0;

 color1:boolean=false;
 color2:boolean=false;

//------------------------------------------------------------------//
//strat bestselling//
listbestselling=[
  {id:1,address:"./assets/img/products/07.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"20%"},
  {id:2,address:"./assets/img/products/08.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
  {id:3,address:"./assets/img/products/09.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
  {id:4,address:"./assets/img/products/010.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"50%"},
  {id:5,address:"./assets/img/products/011.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
  {id:6,address:"./assets/img/products/012.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
  {id:7,address:"./assets/img/products/013.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"10%"},
];
titlebestselling="پرفروش ترین ها";
//end bestselling//
//---------------------------------------------------------------------//







 changeactive(getvalueid:number)
 {
  this.filenamemainslider.find((slider) =>
  {
    if ( slider.id ==getvalueid)
    slider.active="active"
   else
      slider.active=""
   }
   );
}

runtimime(valueid1:number,time:number)
{
  this.timersetInterval=time;
  console.log(this.timersetInterval)
  setInterval(() => {
    this.changeactive(valueid1);
    valueid1+=1
    if (valueid1==6)
      valueid1=0

  }, this.timersetInterval);
}


users:any;
  title = 'DatingAppAngulars';

  constructor(private http:HttpClient,private accountService:AccountService) {

  }

  ngOnInit(): void {
    this.runtimime(this.valueid,this.timersetInterval)

      this.getusers();
      this.setCurrentUser();
  }

  setCurrentUser(){
    const user:userDTOs=JSON.parse(localStorage.getItem('user')||"");
    this.accountService.setCurrentUser(user);
  }
  
  getusers(){
    this.http.get("https://localhost:7097/api/user").subscribe(x=>{
      this.users=x;
    }
    )

  }


}
