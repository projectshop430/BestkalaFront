import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.css']
})
export class BestsellingComponent {
 @Input() TextHeader?:string ;
  viewall:string="مشاهده همه";

 @Input ()  listbestsellingdata:any;



}
