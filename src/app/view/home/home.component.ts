import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CocktailService } from 'src/app/model/services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Cocktail Palace';
  description = 'Tudo o que você precisa.';
  backgroundImageUrl1: string | undefined;
  backgroundImageUrl2: string | undefined;
  backgroundImageUrl3: string | undefined;

  constructor(private cocktailService: CocktailService,
    private titleService: Title,
    private metaService: Meta) {}

  ngOnInit(): void {
    this.setDocTitle(this.title);
    this.setMetaDescription(this.description);
    this.loadRandomCocktail1()
    this.loadRandomCocktail2()
    this.loadRandomCocktail3()
  }

  loadRandomCocktail1(){
    this.cocktailService.getRandomCocktail().subscribe(cocktail => {
      this.backgroundImageUrl1 = cocktail.strDrinkThumb;
    });
  }
  loadRandomCocktail2(){
    this.cocktailService.getRandomCocktail().subscribe(cocktail => {
      this.backgroundImageUrl2 = cocktail.strDrinkThumb;
    });
  }
  loadRandomCocktail3(){
    this.cocktailService.getRandomCocktail().subscribe(cocktail => {
      this.backgroundImageUrl3 = cocktail.strDrinkThumb;
    });
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMetaDescription(description: string) {
    this.metaService.updateTag({ name: 'description', content: description });
  }

  goToGithub(){
    window.open('https://github.com/emanuelsacoman/Cocktail', '_blank');
  }
}
