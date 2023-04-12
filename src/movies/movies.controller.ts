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

@Controller()
export class MoviesController {
  @Get('all')
  getAll() {
    return 'This will return all movies.';
  }

  @Get('search')
  searchOne(@Query('year') searchingYear: string) {
    return `This will return movie that filmed after ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  createOne(@Body() movieData) {
    return movieData;
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
    return `This will return removed movie with id: ${movieId}`;
  }
}
