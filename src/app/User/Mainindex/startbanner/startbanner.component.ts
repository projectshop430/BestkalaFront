import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-startbanner',
  templateUrl: './startbanner.component.html',
  styleUrls: ['./startbanner.component.css']
})
export class StartbannerComponent {
  @Input() items:any;

}
