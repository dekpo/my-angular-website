import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public settings: SettingsService,
    public http:HttpClient,
    public headers:HttpHeaders) { }

  firstname = '';
  lastname = '';
  email = '';
  message = '';

  onSubmit(formData: any) {
    let score = 0;
    let max = 3;
    let errorMessage = '';

    formData.firstname.length > 2 ? score++ : errorMessage += "Firstname is too short !\n";
    formData.lastname.length > 2 ? score++ : errorMessage += "Lastname is too short !\n";
    /* formData.email.indexOf('@') > 1 ? score++ : errorMessage += "Email must contain an @ !\n"; */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      score++ 
    } else {
      errorMessage += "Email must be a valid address !\n";
    }

    let validation = score === max ? true : false;

    if (validation) {
      console.log('Youpi ! Le formulaire est bien rempli !', formData);
    } else {
      alert('Oups an error occured !\n' + errorMessage);
    }

    console.log(formData);
  }

  ngOnInit(): void {
    this.settings.displayCarousel = false;
  }

}
