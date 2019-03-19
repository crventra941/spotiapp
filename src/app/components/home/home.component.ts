import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nuevasCanciones;
  public loading: boolean;
  public error: boolean;
  public msg:  string;


  constructor(private _spotiService: SpotifyService) {
    this.loading = true;

    this._spotiService.getNewReleases()
      .subscribe((data: any) => {
        this.loading = false;
        this.nuevasCanciones = data;
      },err => {

        this.loading = false;
        this.error = true;

        this.msg = err.error.error.message;
        // console.log(this.msg);
      });
  }

  ngOnInit() {
  }

}
