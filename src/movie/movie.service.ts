import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
@Injectable()
export class MovieService {
  async findAll(titre: string) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ae48d29e&type=movie&s=${titre}`,
    );
    const data = await response.json();
    let movie = {};
    const lesdatas = [];
    for (let i = 0; i < data['totalResults']; i += 1) {
      movie = {
        title: titre,
        result: [
          {
            id: data['Search'][i]['imdbID'],
            titre: data['Search'][i]['Title'],
            annee: data['Search'][i]['Year'],
          },
        ],
      };
      lesdatas.push(movie);
    }
    lesdatas.push(`lenght: ${data['totalResults']}`);
    return lesdatas;
  }

  async findById(id: string) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ae48d29e&i=${id}`,
    );
    const data = await response.json();
    const movie = {
      id: data['imdbID'],
      result: {
        type: data['Type'],
        titre: data['Title'],
        annee: data['Year'],
        date: data['Released'],
        temps: data['Runtime'],
        réalisateur: data['Director'],
        acteur: data['Actors'],
        langue: data['Language'],
        pays: data['Country'],
      },
    };
    return movie;
  }
}
