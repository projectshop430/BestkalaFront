import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorysectionbase',
  templateUrl: './categorysectionbase.component.html',
  styleUrls: ['./categorysectionbase.component.css']
})
export class CategorysectionbaseComponent {
  @Input() itemcategory:any;
}
