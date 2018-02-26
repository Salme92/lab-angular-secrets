import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from "../app/session.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.session.isLoggedIn().suscribe();
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .suscribe();
  }
}
