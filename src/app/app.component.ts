import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fe-belajar';
  constructor(){
    initializeApp(environment.firebase)
  }
}
