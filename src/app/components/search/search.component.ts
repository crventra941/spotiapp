import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];
  public loading: boolean;
  public error: boolean;
  public msg:  string;
  
  constructor(private _spotiService: SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista(termino: string) {
    this.loading = true;
    
    this._spotiService.getArtistas(termino)
      .subscribe((data: any) => {
        this.loading = false;
        this.artistas = data;
        
      },err =>{
        this.loading = false;
        this.error = true;

        this.msg = err.error.error.message;
        
      });
  }

}
