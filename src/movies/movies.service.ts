import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MovieData } from './entities/movieData.entity';

@Injectable()
export class MoviesService {
  // 가짜 데이터 베이스 역할
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(movieId: string): Movie {
    return this.movies.find((movie) => movie.id === +movieId);
  }

  createOne(movieData: MovieData): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return true;
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => id !== String(movie.id));
    return true;
  }
}
