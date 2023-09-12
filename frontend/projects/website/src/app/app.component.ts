import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  scrollTo(event:string)
  {
     const element = document.getElementById(event)
     console.log(element);
     element ? element.scrollIntoView({}): ""
  }
}
