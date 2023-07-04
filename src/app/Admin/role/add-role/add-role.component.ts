import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RoleSystemService } from 'src/app/Services/role-system.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent {
  model:any={};
  role:any
  constructor(private http:HttpClient,private RoleSystemServic:RoleSystemService){}
  baseurl:string="https://localhost:7097/api/Role";
  save()
  {
    this.RoleSystemServic.registerRole(this.model).subscribe();
    this.showrole();
  }

  showrole()
  {
    this.http.get(this.baseurl).subscribe(data=>{
       this.role=data;
    })
  }
}
