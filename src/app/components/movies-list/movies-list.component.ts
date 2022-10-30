import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  public movies: any;
  public editedIndex=-1;
  public title: any;
  public director: any;
  public existingItem=false;
  public missingValues=false;

  constructor(private movieService: MovieService,
    private router: Router) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void  {
     this.movieService.getMoviesList().subscribe(response=> {
      this.movies=response;
      console.log(this.movies);
     })
  }

  reloadData(): void  {
    this.movieService.getMoviesList().subscribe(response=> {
     this.movies=response;
     console.log(this.movies);
    })
 }

 updateValueToDB(id:number,item: any){

    if(item.title === null || item.director===null )
    {
      this.gotoList();
    }
    else{
      this.movieService.updateMovie(id,item).subscribe(data => console.log(data), error => console.log(error));
      location.reload();
    }

  }
  deleteMovie(id: number) {
    this.movieService.deleteMovie(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/movies']);
  }

  updateMethod(i: number){
    this.editedIndex=i
  }

  cancel() {
    location.reload();
  }

  buttonClicked() {

    let item = { 'title':this.title,'director':this.director};
    this.movieService.createMovie(item)
   .subscribe(data => {
    if(data)
    {
      location.reload()

    }
    else{

      return;
    }
   });


    this.title = null;
    this.director = null;
  }


}
