import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredient1: string;
  strMeasure1: string;
  strCategory: string;
  strGlass: string;
  strAlcoholic: string;
  strTags: string;
  dateModified: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getCocktailByName(name: string): Observable<Cocktail[]> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.baseUrl}/search.php?s=${name}`)
      .pipe(map(response => response.drinks));
  }

  getRandomCocktail(): Observable<Cocktail> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.baseUrl}/random.php`)
      .pipe(map(response => response.drinks[0]));
  }

  getCocktailById(id: string): Observable<Cocktail> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.baseUrl}/lookup.php?i=${id}`)
      .pipe(map(response => response.drinks[0]));
  }

  getPopularCocktails(): Observable<Cocktail[]> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.baseUrl}/popular.php`)
      .pipe(map(response => response.drinks));
  }

  getCategories(): Observable<string[]> {
    return this.http.get<{ drinks: { strCategory: string }[] }>(`${this.baseUrl}/list.php?c=list`)
      .pipe(map(response => response.drinks.map(drink => drink.strCategory)));
  }

  getCocktailsByLetter(letter: string): Observable<Cocktail[]> {
    return this.http.get<{ drinks: Cocktail[] }>(`${this.baseUrl}/search.php?f=${letter}`)
      .pipe(map(response => response.drinks));
  }

  getAllCocktails(): Observable<Cocktail[]> {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const requests = letters.map(letter => this.getCocktailsByLetter(letter));
    return forkJoin(requests).pipe(
      map(results => results.flat())
    );
  }
}
