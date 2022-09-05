import { Pokemon } from "../interfaces";

const toggleFavorite = (pokemon: Pokemon): void => {
    let favorites: Pokemon[] = getFavorites();

    if (isInFavorites(pokemon, favorites)) {
        favorites = favorites.filter(favPokemon => favPokemon.id !== pokemon.id);
    } else {
        favorites.push(pokemon);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites.sort((pokeA, pokeB) => pokeA.id - pokeB.id)));
}

const getFavorites = (): Pokemon[] => {
    if (typeof window === 'undefined') return [];

    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const isInFavorites = (pokemon: Pokemon, searchList: Pokemon[] = getFavorites()): boolean => {
    return searchList.some(favPokemon => favPokemon.id === pokemon.id);
}

export default {
    toggleFavorite,
    getFavorites,
    isInFavorites
}