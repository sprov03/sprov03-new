import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public hero: Hero | null;
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  updateHero(hero) {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero);
  }
}

export class Hero {
  id: number;
  name: string;
}
