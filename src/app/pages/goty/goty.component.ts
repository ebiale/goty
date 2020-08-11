import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../Interfaces/game';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((res: Game[]) => {
      this.games = res;
    })
  }

  vote(id: string) {
    this.gameService.vote(id).subscribe((res: any) => {
      if (res.ok) {
        Swal.fire('Thanks', res.msg, 'success');
      } else {
        Swal.fire('Ooops', res.msg, 'error');
      }


    });
  }

}
