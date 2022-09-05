import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces/pokemon-list';
import { PokemonData } from '../../components/pokemon/PokemonData';
import { pokeApi } from '../../api';
import { getPokemonForStaticProps } from '../../api/pokeApi';
import { capitalizeWord } from '../../utils/helpers';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const pokemonName: string = capitalizeWord(pokemon.name);

    return (
        <Layout title={`Informacion sobre ${ pokemonName}`} pokemonName={pokemonName}>
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
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as { name: string };

    const pokemon = await getPokemonForStaticProps(name);

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400 //24hs | 60 * 60 * 24
    }
}

export default PokemonByNamePage;
