import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Query,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller()
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get('all')
  getAll() {
    return this.MoviesService.getAll();
  }

  // @Get('search')
  // searchOne(@Query('year') searchingYear: string) {
  //   return `This will return movie that filmed after ${searchingYear}`;
  // }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  createOne(@Body() movieData) {
    return this.MoviesService.createOne(movieData);
  }

  @Put(':id')
  putOne(@Param('id') movieId: string) {
    return `This will return updated movie with the the id: ${movieId}`;
  }

  @Patch(':id')
  patchOne(@Param('id') id: string, @Body() movieData) {
    return {
      movieId: id,
      ...movieData,
    };
  }

  @Delete(':id')
  removeOne(@Param('id') movieId: string) {
    return this.MoviesService.deleteOne(movieId);
  }
}
