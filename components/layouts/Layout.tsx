import { FC, ReactNode } from "react"

import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
	children: ReactNode;
	title?: string;
	pokemonName?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title = 'PokemonApp', pokemonName = '' }): JSX.Element => {
	let keywords: string = 'pokemon, pokedex';
	let ogDescription = title;

	if (pokemonName) {
		keywords += `, ${pokemonName}`;
		ogDescription = `Esta es la pagina sobre ${pokemonName}`;
	}

	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name="author" content="Gianfranco Rocco" />
				<meta name="description" content={title} />
				<meta name="keywords" content={keywords} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main style={{
				padding: '20px'
			}}>
				{ children }
			</main>
		</>
  	)
}
