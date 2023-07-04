import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoleSystemService } from 'src/app/Services/role-system.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{
  role:any;

  ngOnInit(): void {
    this.showrole();
  }
  baseurl:string="https://localhost:7097/api/Role";
  constructor(private http:HttpClient,private rolasystem:RoleSystemService){}
  showrole()
  {
    this.http.get(this.baseurl).subscribe(data=>{
       this.role=data;
    })
  }

}
