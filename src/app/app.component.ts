import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guess the Number App  !';
original:number;
guess:number;
nooftries:number;
deviation:number;

constructor()
{
this.initializeGame();
}

initializeGame()
{
  this.nooftries=0;
  this.guess=null;
  this.deviation=null;
  this.original=Math.floor(Math.random()*1000+1);
console.log(this.original);

}

verifyguess()
{
  this.deviation=this.original-this.guess;
  this.nooftries=this.nooftries+1;
}

}

