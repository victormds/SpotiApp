
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


  getquery (query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCYga2TIFyzTsHBwGG4aPN25wlAeNiJM4bcgvBiWRRFiygQ1uyxfuxnQLkE0Nbc82y5sIgMg9niINTRVmE'
    });

    return this.http.get(url, { headers });

  }


  getNewReleases( ) {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAzk_19wK5IM5ihVKN9Py7JDVk_HAsEHYzEORyvfBeVg_ucDKxEefiJBbjWWjw7AnoaBfAL7Ts9nnihp3M'
    // });

    return this.getquery('browse/new-releases?limit=20')
              .pipe( map ( data =>  data['albums'].items));
  }

  getArtistas(termino: string) {

    return this.getquery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map ( data =>  data['artists'].items));
  }

  getArtista(id: string) {

    return this.getquery(`artists/${ id }`);
              // .pipe( map ( data =>  data['artists'].items));
  }

  getTopTracks(id: string) {

    return this.getquery(`artists/${ id }/top-tracks?country=us`)
            .pipe( map ( data => data ['tracks']));

  }


}
