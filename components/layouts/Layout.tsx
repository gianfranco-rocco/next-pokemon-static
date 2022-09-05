import { FC, ReactNode } from "react"

import Head from "next/head"
import { Navbar } from '../ui/Navbar';

interface Props {
	children: ReactNode;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title = 'PokemonApp' }): JSX.Element => {
  return (
	<>
		<Head>
			<title>{ title }</title>
			<meta name="author" content="Gianfranco Rocco" />
			<meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
			<meta name="keywords" content={`${title}, pokemon, pokedex`} />
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
