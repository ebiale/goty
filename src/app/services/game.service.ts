import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Game} from '../Interfaces/game';
import {of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor(private http: HttpClient) { }

  getGames(){
    if(this.games.length === 0) {
      return this.http.get<Game[]>(`${environment.base_url}/api/goty`).pipe(
        tap( games => { this.games = games} )
      );
    }
    return of(this.games);
  }

  vote(id: string) {
    return this.http.post(`${environment.base_url}/api/goty/${id}`, {})
      .pipe(
        catchError(err => {
          return of(err.error);
        })
      );
  }
}
