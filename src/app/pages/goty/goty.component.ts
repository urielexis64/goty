import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

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

  vote(game: Game) {
    this._gameService
      .vote(game.id)
      .subscribe((response: { OK: boolean; message: string }) => {
        if (response.OK) {
          Swal.fire({
            icon: 'success',
            title: 'Nice!',
            text: response.message,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oppss...',
            text: response.message,
          });
        }
      });
  }
}
