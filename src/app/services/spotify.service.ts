import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer BQAa4UGrvqvq-3pbZbgX8ZmNGGCMT9cvEzV6_u8449jPJ-08VuwHafNBdqDvin03kqrtDXRnFqlBOHH4P8E'
    });

   return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=20`, { headers });
  }

}
