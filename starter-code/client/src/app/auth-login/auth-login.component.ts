import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  username:string;
  password:string;
  error:string;
  constructor(public session: SessionService) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => console.log(`Welcome ${user.username}`));
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}