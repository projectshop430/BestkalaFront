import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent {
  @Input() itemsmainslider:any;
}
