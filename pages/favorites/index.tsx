import { Layout } from '../../components/layouts';
import { Favorites, NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { useState }  from 'react';
import { Pokemon } from '../../interfaces';

const FavoritesPage = () => {
  const [favorites] = useState<Pokemon[]>(localFavorites.getFavorites());

  return (
    <Layout title='Favoritos'>
      { favorites.length ? <Favorites favorites={favorites} /> : <NoFavorites /> }
    </Layout>
  )
}

export default FavoritesPage;