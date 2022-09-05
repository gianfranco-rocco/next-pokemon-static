import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces/pokemon-list';
import { PokemonData } from '../../components/pokemon/PokemonData';
import { pokeApi } from '../../api';
import { getPokemonForStaticProps } from '../../api/pokeApi';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <PokemonData pokemon={pokemon} />
        </Layout>
    )
}

interface StaticPaths {
    params: { name: string };
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const paths: StaticPaths[] = await data.results.map(pokemon => ({
        params: { name: pokemon.name }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as { name: string };

    return {
        props: {
            pokemon: await getPokemonForStaticProps(name)
        }
    }
}

export default PokemonByNamePage;
