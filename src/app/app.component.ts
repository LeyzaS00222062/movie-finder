import { Component } from '@angular/core';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';
import { CommonModule } from '@angular/common';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';
import { RouterLink, RouterLinkActive, RouterModule  } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, SearchtitleComponent, RouterLink , RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){}
  
  getMovieDetails(movieName:string):boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      (movieData) => {
        this.movieData = movieData;
        console.log("Director name: " + this.movieData?.Director);
      }
    );
    return false;
  }
}
