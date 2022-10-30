import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8080/api/movies/';

  constructor(private http: HttpClient) { }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post('http://localhost:8080/api/movies/', movie);
  }

  updateMovie(id: any, value: any): Observable<Object> {

    return this.http.put('http://localhost:8080/api/movies/'+id, value);
  }

  deleteMovie(id: number): Observable<any> {
    console.log(id);
    return this.http.delete('http://localhost:8080/api/movies/'+id, { responseType: 'text' });
  }

  getMoviesList(): Observable<any> {
    return this.http.get('http://localhost:8080/api/movies/');
  }
}
