
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';



@Injectable({
  // forma automatica de importar los servicios.
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewReleases( ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDuB81lJKCNwax2tDN3h9afXm2q5POMcM5e8zii3OoOiORxo8ayj8vKGT56dYyd_L5PVMT4t_3EckguAtg'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
                .pipe( map ( data =>  data['albums'].items
                ));
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDuB81lJKCNwax2tDN3h9afXm2q5POMcM5e8zii3OoOiORxo8ayj8vKGT56dYyd_L5PVMT4t_3EckguAtg'
    });

    return this.http.get("https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15", { headers })
    .pipe( map ( data =>  data['artists'].items
    ));
  }
}
