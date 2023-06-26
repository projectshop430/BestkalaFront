import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { userDTOs } from '../DTOs/userDTOs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductModel:any;
  
  

  baseurl:string='https://localhost:7097/api/';
  private currentUserSource=new ReplaySubject()
  currentUser=this.currentUserSource.asObservable();

  constructor(private http:HttpClient,private router:Router,private toater:ToastrService) { }

  ProductRegister(model:any){
    return this.http.post(`${this.baseurl}AccountProduct/SaveKala`,model)
    .pipe(map((x:any)=>{
    
      if(x.isSuccess&& x.data!=undefined){
        localStorage.setItem('productRegister',JSON.stringify(x.data));
        this.currentUserSource.next(x.data);
        this.toater.success(x.data);
      }
      if (x.isSuccess==false)
      this.toater.error(x.message);
      
    }))
  }


    
  

  

}
