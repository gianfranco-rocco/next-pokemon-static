import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { Layout } from '../../components/layouts';
import { getPokemonForStaticProps } from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-list';
import { PokemonData } from '../../components/pokemon/PokemonData';
import { capitalizeWord } from '../../utils/helpers';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const pokemonName: string = capitalizeWord(pokemon.name);

    return (
        <Layout title={`Informacion sobre ${ pokemonName}`} pokemonName={pokemonName}>
            <PokemonData pokemon={pokemon} />
        </Layout>
    )
}

interface StaticPaths {
    params: { id: string };
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemonIds: string[] = [...Array(151)].map((val, index) => `${ index + 1 }`);

    const paths: StaticPaths[] = pokemonIds.map(id => ({
        params: { id }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as { id: string };

    const pokemon = await getPokemonForStaticProps(id);

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

export default PokemonPage;
