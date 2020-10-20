import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  title: string = "";
  year: number = 0;
  
  constructor(private dbService: DatabaseService, private router: Router) {}
  ngOnInit(){
  }
  onSaveMovie() {
    let obj = { title: this.title, year: this.year, actors: []};
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

}
