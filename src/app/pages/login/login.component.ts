import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public settings: SettingsService,
    public formBuilder:FormBuilder,
    public http:HttpClient) { }

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });

  login(){
    console.log(this.loginForm.value);

    this.http.post("https://httpbin.org/post",this.loginForm.value).subscribe(
      response => {
        console.log("Woohoo le serveur nous répond !", response)
      }
    )
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
    this.settings.displayCarousel = false;
  }

}
