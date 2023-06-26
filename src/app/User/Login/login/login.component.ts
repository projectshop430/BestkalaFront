import { Component ,OnInit} from '@angular/core';
import {FormGroup , FormControl , FormBuilder , Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerForm! : FormGroup;


  constructor(private fb : FormBuilder){}

  initAddressForm() : FormGroup{
    return this.fb.group({
      type:[''],
      address:['']
    })
  }


  ngOnInit(): void {
    this.customerForm = this.fb.group({
      FeildEmail : ['',Validators.required],
      Feildpassword : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      addressList : this.fb.array([this.initAddressForm])
    })
  }
  get accountInfoForm(){
    return this.customerForm.get('accountInfoForm');
  }
  get addressList(){
    return this.customerForm.get('addressList') as FormArray;
  }

  addNewAddress(event:any){
    event.preventDefault();
    this.addressList.push(this.initAddressForm());
  }
  removeAddress(index:any){
    this.addressList.removeAt(index)
  }


  save(){
    console.log(this.customerForm.value);
  }
}
