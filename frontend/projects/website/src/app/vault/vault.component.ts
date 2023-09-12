import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent{

   myForm !: FormGroup;

   searchForm !: FormGroup;
   documents: any[] = [];


   constructor(private userService: UserService,private fb: FormBuilder,
     private http: HttpClient, private documentService: DocumentService ){

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      website: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]


  });
  this.searchForm = this.fb.group({
    userEmail: ['', Validators.required]

});
   }

   registerForm= new FormGroup({

   });


   Submit() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
        return
     }
     this.http.post("http://localhost:8082/documents/add",this.myForm.value).subscribe((response)=>{
         alert("Saved Successfully ")
       })
   }

   hasError(controlname:string){
    return this.myForm.get(controlname)?.invalid && this.myForm.get(controlname)?.touched
  }



    searchDocuments() {

      console.log(this.searchForm.value);
      this.http.get<any[]>(`http://localhost:8082/documents/byEmail/${this.searchForm.value.userEmail}`).subscribe(
        (data) => {
          this.documents = data;
          console.log(this.documents);
        },
        (error) => {
          console.error('Error fetching documents:', error);
        }
      );
    }


    }




