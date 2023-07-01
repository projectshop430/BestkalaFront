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
export class AccountService {

  baseurl:string='https://localhost:7097/api/';
  private currentUserSource=new ReplaySubject<userDTOs>()
  currentUser=this.currentUserSource.asObservable();

  islogin$=false;


  constructor(private http:HttpClient,private router:Router,private toater:ToastrService) { }

  login(model:any) {
    
    return this.http.post(`${this.baseurl}account/login`,model)
    .pipe(map((response:any)=>{
      const user:userDTOs=<userDTOs>response;
      console.log(user)
      if (response.isSuccess==false)
      {
      console.log(response.message);
      this.islogin$=false;
      }
      else if(user){
        this.islogin$=true;
        this.toater.success("Best Login")
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
        this.router.navigateByUrl("/Members");
      }
     
    }))
  }

  register(model:any){
    return this.http.post(`${this.baseurl}account/register`,model)
    .pipe(map((x:any)=>{
    
      if(x.isSuccess&& x.data!=undefined){
        localStorage.setItem('useregister',JSON.stringify(x.data));
        this.currentUserSource.next(x.data);
        this.toater.success(x.message);
        
      }
      if (x.isSuccess==false)
      this.toater.error(x.message);
    }))
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next({} as userDTOs);

    
  }
  setCurrentUser(user:userDTOs){
    this.currentUserSource.next(user);
  }
}
