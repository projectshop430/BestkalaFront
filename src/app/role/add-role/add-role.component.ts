import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoleSystemService } from 'src/app/Services/role-system.service';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit{
  baseurl:string="https://localhost:7097/api/Role";

  model:any={};
  constructor(private http:HttpClient,private rolasystem:RoleSystemService,private router: Router){}
  ngOnInit(): void {
    this.printpath('', this.router.config);
  }
  addRole()
  {
    this.rolasystem.registerRole(this.model).subscribe();
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
 
}
