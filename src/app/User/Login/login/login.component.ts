import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { Observable } from 'rxjs';
import { userDTOs } from 'src/app/DTOs/userDTOs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model :any={};
  islogin=false;

  constructor(public accountService:AccountService, private router:Router) {}

  ngOnInit(): void {
  
  }

  loging(){
   
    this.accountService.login(this.model).subscribe(data=>{
    
      console.log(data);
      console.log(this.accountService.islogin$)
      if (this.accountService.islogin$)
      {
       
      this.islogin=true;
      }
    },error=>{
     
      console.log(error)
    }
    );
    
    
  }

  logout(){
    this.accountService.logout();
    this.islogin=false;
    this.router.navigateByUrl('/');
    
  }
}
