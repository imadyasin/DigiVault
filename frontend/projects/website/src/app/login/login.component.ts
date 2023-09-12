import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { AuthService } from '../services/auth.service';
import { users } from '../../users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  route=inject(Router) //inject method
  myservice=inject(ServicesService)
 user={
  email:null,
  password:null


 };
 errorMessage = '';

 isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router , private http: HttpClient){

  }


  Login()
  {

   this.http.post<boolean>("http://localhost:8082/users/authenticate",this.user).subscribe((response)=>{
    this.isAuthenticated = response;
    debugger
    if(response){
      alert("Login Successfull");
      this.route.navigate(['/vault']);
    }
    else{
      this.errorMessage = 'Incorrect Username or Password / User does not Exists';
    }

   });

  }


}
