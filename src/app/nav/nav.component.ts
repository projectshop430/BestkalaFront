import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Observable } from 'rxjs';
import { userDTOs } from '../DTOs/userDTOs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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



