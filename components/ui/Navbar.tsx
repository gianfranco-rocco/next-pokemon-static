import { Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <div>
                <NextLink href='/' passHref>
                    <Link css={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Image 
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                            width={70}
                            height={70}
                            alt='Site image'
                        />

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '20px'
                        }}>
                            <Text color='white' h2>P</Text>
                            <Text color='white' h3>okemon</Text>
                        </div>
                    </Link>
                </NextLink>
            </div>

            <NextLink href='/favorites' passHref>
                <Link>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
}
