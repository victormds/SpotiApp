import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      'Authorization': 'Bearer BQBZDXBBozhsrN6gwB8-Xy6Tp4Pf6cPwHkaMwU0K5T5x55ZT-lrzCTI0KC196NWZ34VhhkpZJj6y9uFzujw'
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBZDXBBozhsrN6gwB8-Xy6Tp4Pf6cPwHkaMwU0K5T5x55ZT-lrzCTI0KC196NWZ34VhhkpZJj6y9uFzujw'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });


  }
}
