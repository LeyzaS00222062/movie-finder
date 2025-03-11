import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { CommonModule } from '@angular/common';
import { IOMDBResponse } from '../../omdbresponse';

@Component({
  selector: 'app-searchtitle',
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
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
