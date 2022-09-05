import { FC } from "react"
import { Pokemon } from "../../interfaces"
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from "next/router";

interface Props {
    pokemon: Pokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { id, name, img } = pokemon;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card
                isHoverable
                isPressable
                onPress={handleClick}
            >
                <Card.Body css={{
                    padding: '20px'
                }}>
                    <Card.Image
                        src={img}
                        height={70}
                        width={70}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
