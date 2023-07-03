import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoleSystemService } from '../Services/role-system.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{
  role:any;

  ngOnInit(): void {
    this.listrol();
  }
  baseurl:string="https://localhost:7097/api/Role";
  constructor(private http:HttpClient,private rolasystem:RoleSystemService){}
  listrol()
  {
    this.http.get(this.baseurl).subscribe(data=>{
      this.role=data;
    })
  }  

}
