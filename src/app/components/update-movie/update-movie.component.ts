import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie.model';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})

export class UpdateMovieComponent implements OnInit {

  public id=0;
  public movie:Movie | undefined;

  constructor(private route: ActivatedRoute,private router: Router,
    private movieService: MovieService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.movie=new Movie();
    this.movie.id=this.id;
    this.movie.title='abc';
    this.movie.director='dd';
    this.movieService.getMovie(this.id)
      .subscribe(data => {
        console.log(data)
        this.movie = data;
      }, error => console.log(error));
  }

  updateMovie() {
    this.movieService.updateMovie(this.id, this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
    this.gotoList();
  }

  onSubmit() {
    this.updateMovie();
  }

  gotoList() {
    this.router.navigate(['/movies']);
  }


}
