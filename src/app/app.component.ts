import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major  + " @ " + VERSION.minor;
  title =  "Geek or Freak";
src = "https://www.google.com/search?q=images&prmd=ibnv&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7-OmwlIn4AhVKwjgGHWU2BEQQ_AUoAXoECAIQAQ&biw=640&bih=280&dpr=2#imgrc=2nDXavJs9DoKTM";
}
