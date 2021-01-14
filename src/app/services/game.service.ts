import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[] = [];

  constructor(private _http: HttpClient) {}

  getNominated() {
    if (this.games.length > 0) {
      return of(this.games);
    } else {
      return this._http
        .get<Game[]>(`${environment.url}/api/goty`)
        .pipe(tap((response) => (this.games = response)));
    }
  }

  vote(gameId: string) {
    return this._http
      .post(`${environment.url}/api/goty/${gameId}`, {})
      .pipe(catchError((err) => of(err.error)));
  }
}
