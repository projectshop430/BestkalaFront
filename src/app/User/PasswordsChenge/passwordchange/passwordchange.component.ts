import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent implements OnInit {
  ForgotpasswordForm!:FormGroup
  FormTemplate=[
    {
      "type":"password",
      "name":"lastpass",
      "label":"رمز عبور قبلی",
      "placeholder":"رمز عبور خود را وارد نمایید.",
      "icon":"mdi mdi-lock-open-variant-outline"
    },
    {
      "type":"password",
      "name":"passnew",
      "label":"رمز عبور جدید",
      "placeholder":"رمز عبور خود را وارد نمایید",
      "icon":"mdi mdi-lock-reset",
    },
    {
      "type":"password",
      "name":"confirm",
      "label":"تکرار رمز عبور جدید",
      "placeholder":"رمز عبور خود را وارد نمایید",
      "icon":"mdi mdi-lock-reset",
    },
  ];

  ngOnInit(): void {
    let group:any = {}
    this.FormTemplate.forEach(input_template =>{
      group[input_template.name!] = new FormControl('');
    })
    this.ForgotpasswordForm = new FormGroup(group);
  }

  onSubmit(){
    let group:any = {}
    this.FormTemplate.forEach(input_template =>{
      group[input_template.name!] = new FormControl('');
    })

    // this.ForgotpasswordForm = new FormGroup(group);
    // this.checkMatchesConfirm(this.ForgotpasswordForm.value)

    console.log(this.ForgotpasswordForm.value)
  }

//   checkMatchesConfirm(group: FormGroup){
//     var confirm = group.controls['passnew'];
//     if(group.controls['confirm'].value !== confirm.value)
//     console.log("not mach")
//     return null;
// }

}
