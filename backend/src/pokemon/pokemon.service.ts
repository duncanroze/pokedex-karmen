import { Injectable, NotFoundException } from '@nestjs/common';
import { PokemonDto } from './pokemon.dto';
import axios from 'axios';

@Injectable()
export class PokemonService {
    async getPokemonById(id: number): Promise<PokemonDto> {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = response.data;

            return {
                id: data.id,
                name: data.name,
                height: data.height,
                weight: data.weight,
                types: data.types.map((t) => t.type.name),
                sprite: data.sprites.front_default,
            };
        } catch (error) {
            if (error.response && error.response.status === 404) {
                throw new NotFoundException(`No Pokémon found with id ${id}`);
            }
            throw new Error('Error fetching data from PokeAPI');
        }
    }
}
