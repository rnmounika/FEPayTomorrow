import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'add', component: AddMovieComponent},
  { path: 'update/:id', component: UpdateMovieComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'delete/:id', component: DeleteMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
