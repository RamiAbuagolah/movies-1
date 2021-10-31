import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userEmail=''
  constructor() { }

  ngOnInit(): void {
  }
  contactSubmit(contactForm :NgForm){
    alert(
       contactForm.value.userName +'\n'+
       contactForm.value.userEmail +'\n'+
       contactForm.value.userPhone +'\n'+
       contactForm.value.Subject +'\n'+
       contactForm.value.Message +'\n'

    )
  }
 
}
