import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CocktailService } from 'src/app/model/services/cocktail.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cocktails: any[] = [];
  cocktailToShow: any[] = [];
  selectedCocktail: any = null;

  title = 'Cocktail Palace';
  description = 'Tudo o que você precisa.';

  constructor(private cocktailService: CocktailService,
              private titleService: Title,
              private metaService: Meta) {}

  ngOnInit(): void {
    this.loadAllCocktails();
    this.setDocTitle(this.title);
    this.setMetaDescription(this.description);
  }

  goToGithub(){
    window.open('https://github.com/emanuelsacoman/Cocktail', '_blank');
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMetaDescription(description: string) {
    this.metaService.updateTag({ name: 'description', content: description });
  }

  loadAllCocktails(): void {
    this.cocktailService.getAllCocktails().subscribe(data => {
      this.cocktails = data;
      this.cocktailToShow = this.cocktails;
      console.log(this.cocktails); 
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase().trim();
  
    if (!value) {
      this.cocktailToShow = this.cocktails;
      return;
    }
  
    this.cocktailToShow = this.cocktails.filter(cocktail => {
      return cocktail && cocktail.strDrink && cocktail.strDrink.toLowerCase().includes(value);
    });
  }

  showCocktailDetails(cocktail: any): void {
    this.selectedCocktail = cocktail;
    if (!this.selectedCocktail.ingredients) {
      this.selectedCocktail.ingredients = this.getIngredients(this.selectedCocktail);
    }
  }

  closeCocktailDetails(): void {
    this.selectedCocktail = null;
  }

  getIngredients(cocktail: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientName = cocktail['strIngredient' + i];
      const ingredientMeasure = cocktail['strMeasure' + i];
      if (ingredientName && ingredientName.trim() !== '') {
        ingredients.push(`${ingredientName} - ${ingredientMeasure}`);
      }
    }
    return ingredients;
  }
  
}
