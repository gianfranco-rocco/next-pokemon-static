import { Grid, Card, Button, Container, Text } from '@nextui-org/react'
import Image from 'next/image';
import React, { FC, useState } from 'react'
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

export const PokemonData: FC<Props> = ({ pokemon }) => {
    const { name, sprites } = pokemon;

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.isInFavorites(pokemon));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon);

        setIsInFavorites(currVal => !currVal);
    }
    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4}>
                <Card>
                    <Card.Body>
                        <Card.Image
                            src={ sprites?.other?.dream_world?.front_default || '' }
                            alt={ name }
                            width='100%'
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform='capitalize'>{ pokemon.name }</Text>

                        <Button
                            color='gradient'
                            ghost={!isInFavorites}
                            onPress={onToggleFavorite}
                        >
                            {isInFavorites ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                        </Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30 }>Sprites:</Text>

                        <Container display='flex'>
                            <Image 
                                src={ sprites?.front_default || '' }
                                alt={ name }
                                height={ 100 }
                                width={ 100 }
                            />
                            <Image 
                                src={ sprites?.back_default || '' }
                                alt={ name }
                                height={ 100 }
                                width={ 100 }
                            />
                            <Image 
                                src={ sprites?.front_shiny || '' }
                                alt={ name }
                                height={ 100 }
                                width={ 100 }
                            />
                            <Image 
                                src={ sprites?.back_shiny || '' }
                                alt={ name }
                                height={ 100 }
                                width={ 100 }
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}
