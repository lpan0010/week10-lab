import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddActorToMovieComponent } from './add-actor-to-movie/add-actor-to-movie.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "listmovies", component: ListMoviesComponent },
  { path: "addmovie", component: AddMovieComponent },
  { path: "deletemovie", component: DeleteMovieComponent },
  {path: "addactortomovie", component: AddActorToMovieComponent},
  { path: "", redirectTo: 'listactors', pathMatch: 'full'},
  { path: "**", component: ViewNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    ListMoviesComponent,
    AddActorToMovieComponent,
    ViewNotFoundComponent,
    ListactorsComponent,
    AddactorComponent,
    
    DeleteactorComponent,
    UpdateactorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
