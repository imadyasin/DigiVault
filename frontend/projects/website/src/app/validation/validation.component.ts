import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input} from '@angular/core';
import { ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class ValidationComponent {

  @Input() error!:ValidationErrors
  @Input() controlName!:String

}
