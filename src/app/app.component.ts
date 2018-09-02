import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyD06aN-Z0TtrNYOeIa41zoogXbKXZOJTDk',
      authDomain: 'coursangular-bf092.firebaseapp.com',
      databaseURL: 'https://coursangular-bf092.firebaseio.com/',
      projectId: 'coursangular-bf092',
      storageBucket: 'coursangular-bf092.appspot.com',
      messagingSenderId: '495571345997'
    };
    firebase.initializeApp(config);
  }
}
