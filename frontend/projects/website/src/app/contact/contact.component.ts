import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactInfo: any = {
    // Initialize with your contact information
    name: '',
    email: '',
    message: '',
  };

  constructor(private contactService: ContactService ){}

  sendEmail()
  {

    this.contactService.sendEmail(this.contactInfo).subscribe(
      (response) => {

       response?alert('Email sent successfully'):alert('Error sending email')

     //  alert(response?'Email sent successfully':'error sending email')
     this.contactInfo.name=''
     this.contactInfo.email=''
     this.contactInfo.message=''

      },

    );
  }
}
