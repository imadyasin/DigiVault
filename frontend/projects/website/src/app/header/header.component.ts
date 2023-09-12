import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() scrollTO: EventEmitter<string>=new EventEmitter()
  scrollTo(identifier:string)
  {
    this.scrollTO.emit(identifier)
  }
}
