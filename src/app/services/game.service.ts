import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private _http: HttpClient) {}

  getNominated() {
    return this._http.get<Game[]>(`${environment.url}/api/goty`);
  }
}
