import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"
const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Button
        pos={"fixed"}
        left={"4"}
        top={"4"}
        colorScheme='yellow'
        padding={"0"}
        w={'10'}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
        scrollBehavior={'smooth'}
        zIndex={1}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>GO TUBE</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>

                <Button onClick={onClose} variant={'ghost'} colorScheme='yellow'>
                  <Link to={"/"}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='yellow'>
                  <Link to={"/videos"}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='yellow'>
                  <Link to={"/videos?category=free"}>Free videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='yellow'>
                  <Link to={"/upload"}>Upload video</Link>
                </Button>

              </VStack>
              <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
              
                <Button onClick={onClose} colorScheme='yellow'>
                  <Link to={"/login"}>Login</Link>
                </Button>

                <Button onClick={onClose} colorScheme='yellow' variant={'outline'}>
                  <Link to={"/signup"}>Sign Up</Link>
                </Button>

              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>


    </>
  )
}

export default Header