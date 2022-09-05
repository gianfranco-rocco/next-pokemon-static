import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import { Layout } from '../components/layouts'
import { Pokemon, PokemonListResponse } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';
import { pokeApi } from '../api';
interface Props {
  pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return ( 
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2}>
        {pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: Pokemon[] = await data.results.map( (pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
