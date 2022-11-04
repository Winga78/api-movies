import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/:title')
  findAll(@Param('title') title: string) {
    return this.movieService.findAll(title);
  }

  @Get('/one/:id')
  findbyId(@Param('id') id: string) {
    return this.movieService.findById(id);
  }
}
