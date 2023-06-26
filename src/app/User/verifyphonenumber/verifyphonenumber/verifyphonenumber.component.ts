import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , FormBuilder , Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-verifyphonenumber',
  templateUrl: './verifyphonenumber.component.html',
  styleUrls: ['./verifyphonenumber.component.css']
})
export class VerifyphonenumberComponent  implements OnInit {

  customerForm! : FormGroup;




confirmationnumber:string=" تایید شماره" ;
descriptionconfirimation1:string ='  کد تایید ارسال گردید';
descriptionconfirimation2:string='برای شماره همراه';
descriptionphonnumber!:number;
editnumber:string="ویرایش شماره";
label:string="کد تایید را وارد کنید";
// ----------------------------------------------//

x!:String;

constructor(private fb : FormBuilder){}

initmobileForm() : FormGroup{
  return this.fb.group({
    type:[''],
    mobile:['']
  })

}
ngOnInit(): void {
  this.customerForm = this.fb.group({
    sh1 : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    sh2 : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    sh3 : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    sh4 : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    sh5 : ['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    mobile : this.fb.array([this.initmobileForm])
  })
}



get mobileList(){
  return this.customerForm.get('mobileList') as FormArray;
}



addNewAddress(event:any){
  event.preventDefault();
  this.mobileList.push(this.initmobileForm());
}

send(){

  console.log(this.customerForm.value);




}
}
