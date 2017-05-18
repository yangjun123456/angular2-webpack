import { Component } from '@angular/core';
import { HighlightDirective } from './directive/font_color/font-color.directive';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color= 'red';
  constructor(){
    
  }
 }
