import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'105vh'} p={'16'} >
            <form >
                <VStack
                    alignItems={'stretch'}
                    spacing={'8'}
                    w={['full','96']}
                    m={'auto'}
                    my={'16'}
                >
                    <Heading textAlign={'center'}>Go Tube</Heading>
                    <Avatar alignSelf={'center'} boxSize={'32'} />
                    <Input
                        placeholder={'Name'}
                        type={'name'}
                        required
                        focusBorderColor={'yellow.500'}
                    />
                    <Input
                        placeholder={'Email'}
                        type={'email'}
                        required
                        focusBorderColor={'yellow.500'}
                    />
                    <Input
                        placeholder={'Password'}
                        type={'password'}
                        required
                        focusBorderColor={'yellow.500'}
                    />

                    <Button colorScheme='yellow' type='submit'>
                        Sign Up
                    </Button>
                    <Text textAlign={'center'}>
                        Already Signed UP ?{' '}
                        <Button variant={'link'} colorScheme='yellow'>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}

export default Signup