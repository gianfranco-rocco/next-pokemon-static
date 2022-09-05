import axios  from 'axios'
import { FullPokemon, Pokemon } from '../interfaces';

export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const getPokemonForStaticProps = async (searchBy: string): Promise<Pokemon> => {
    const { data: { id, name, sprites } } = await pokeApi.get<FullPokemon>(`/pokemon/${searchBy}`);

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return {
        id,
        name,
        img,
        sprites
    };
}