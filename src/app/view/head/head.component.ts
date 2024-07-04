import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  showItems = false;

  toggleItems() {
    this.showItems = !this.showItems;
  }
}
