import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  myForm !: FormGroup;

constructor(private route : Router, private serv1 : ServicesService, private http: HttpClient,private fb: FormBuilder){

  this.myForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    mobilenumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
});
}


    registerForm= new FormGroup({

  });

  submit(){

    this.http.post("http://localhost:8082/users/saveuser",this.myForm.value).subscribe((response)=>{
        alert("New User is registered ! ")
        this.route.navigate(['/login']);
      })
  }

  hasError(controlname:string){
     return this.myForm.get(controlname)?.invalid && this.myForm.get(controlname)?.touched
  }
}
