import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
  }
  
  getQuery( query: string){
    const url =  `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDdJiAEarHJw7yHfakqIhyltOvbIu54LTAN80UXsfijHZmPsWFqbYE2VjiqJozkTBHxLCIw_ZnL6UGQSlA'
    });
    return this.http.get(url,{headers});
    

  }

  getNewReleases() {
    // map realiza el filtrado de aqullos campos que voy a requerir 

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data =>  data['albums']['items']));

  }

  getArtistas(termino: string) {
  
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) =>  data.artists.items ));

  }

  getArtista(id: string) {
  
    return this.getQuery(`artists/${id}`);
      // .pipe(map((data: any) =>  data.artists.items ));

  }

  getTopTracks(id: string) {
  
    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
         .pipe(map((data: any) =>  data.tracks));

  }

  getToken(client_id: string, client_secret){
    return this.http.get(`localhost:/3000/${client_id}/${client_secret}`)
  }
  
}
