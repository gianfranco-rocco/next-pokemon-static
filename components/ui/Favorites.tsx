import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { Pokemon } from "../../interfaces";
import { PokemonCard } from "../pokemon";

interface Props {
  favorites: Pokemon[];
}

export const Favorites: FC<Props> = ({ favorites }) => {
  return (
    <Grid.Container gap={2}>
      {favorites.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </Grid.Container>
  )
}
