import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Cocktail Palace';
  description = 'Tudo o que você precisa.';

  constructor(private titleService: Title,
    private metaService: Meta,){

  }

  ngOnInit(): void {
    this.setDocTitle(this.title);
    this.setMetaDescription(this.description);
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMetaDescription(description: string) {
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
