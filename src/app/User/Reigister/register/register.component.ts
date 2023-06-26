import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {
  model :any={};
  constructor(public accountService:AccountService, private router:Router) {}
  ngOnInit(): void {}

  reigister(){
 
    this.accountService.register(this.model).subscribe(data=>{
    
      console.log(data);
      console.log(this.accountService.islogin$)
      
    },error=>{
     
      console.log(error)
    });
  }

}
