import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major  + " @ " + VERSION.minor;
  title =  "Geek or Freak";
src = 'https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png';  
bool = 'true';  
}   

