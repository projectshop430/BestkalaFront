import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  baseurl:string='https://localhost:7097/api/';
  ProductModel:any;
  style?:string;
  constructor(private http:HttpClient) { }
ngOnInit(): void {

  this.ProductLists();
  this.style="fa-solid fa-eye "
}

ProductLists(){
  return this.http.get(`${this.baseurl}Product`).subscribe(x=>{
    this.ProductModel=x;
    
  });
}
  
}
