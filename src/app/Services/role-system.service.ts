import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/internal/operators/map';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleSystemService {
 baseUrl:string="https://localhost:7097/api/accountrole/RegisterRoles"
  constructor(private http:HttpClient,private toaster:ToastrService) { }

  registerRole(model:any)
  {
return this.http.post(this.baseUrl,model).pipe(map((x1:any)=>{
  if (x1.isSuccess==true)
  {
    this.toaster.success(x1.message)
  }
  else{
    this.toaster.error(x1.message)
  }
}))
  }
}

