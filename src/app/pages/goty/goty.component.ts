import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  games: Game[] = [];
  constructor(private _gameService: GameService) {}

  ngOnInit(): void {
    this._gameService.getNominated().subscribe((games) => {
      this.games = games;
    });
  }
}
