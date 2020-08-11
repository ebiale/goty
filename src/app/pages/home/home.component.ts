import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Game} from '../../Interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any[] = [];

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        map( (res: Game[]) => {
          return res.map(({name, votes}) => ({name, value: votes}))
        })
      )
      .subscribe(games => {
        this.games = games;
      })
  }

}
