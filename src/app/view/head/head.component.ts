import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  showItems = false;

  constructor(private route: Router){

  }

  toggleItems() {
    this.showItems = !this.showItems;
  }

  goToGithub(){
    window.open('https://github.com/emanuelsacoman/Cocktail', '_blank');
  }

  home(){
    this.route.navigate(['']);
  }

  cocktails(){
    this.route.navigate(['/cocktails']);
  }
}
