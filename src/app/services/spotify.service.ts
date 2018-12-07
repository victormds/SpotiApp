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
      'Authorization': 'Bearer BQCK4GDK_gHy_RRxUvnCCfdYMtDHMRj-nO4haAT11y9zGoLMWqG0b2y5vJKbIAncVYbfiTQeHQWS1WwM5O8'
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers});
  }
}
