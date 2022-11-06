import { Component } from '@angular/core';
import { getQuestion } from './app-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'never-have-i-ever-game';
  mainQuestion = getQuestion();
}


