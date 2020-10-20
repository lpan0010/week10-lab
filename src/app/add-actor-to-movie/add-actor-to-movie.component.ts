import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-actor-to-movie',
  templateUrl: './add-actor-to-movie.component.html',
  styleUrls: ['./add-actor-to-movie.component.css']
})
export class AddActorToMovieComponent implements OnInit {
  selectedActor = null;
  selectedMovie = null;
  moviesDB: any[] = [];
  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  //Get all movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  //Get all actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onSavingActorToMovie() {
    this.dbService
      .addActorToMovie(this.selectedMovie._id, this.selectedActor)
      .subscribe((result) => {
        this.onGetMovies();
        this.onGetActors();
      });
    this.selectedActor = null;
    this.selectedMovie = null;
    this.router.navigate(["/listmovies"])
  }
  ngOnInit(): void {
    this.onGetMovies()
    this.onGetActors()
  }

  changeSelectedActor(item) {
    this.selectedActor = item;
  }
  changeSelectedMovie(item) {
    this.selectedMovie = item;
  }

}
