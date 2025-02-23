import { Link } from 'react-router-dom'
import { HStack, Button, Flex, Spacer, useColorMode, useColorModeValue,  } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const Gradient = useColorModeValue(
    'linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))',
    'linear(to-l, rgb(82, 173, 73), rgba(17, 47, 112, 0.8))'
  )

  return (
    <Flex 
      as="nav"
      width="100%"
      bgGradient={Gradient}
      px={[0, 2, 4]} // Responsive padding
      py={2}
      alignItems="center"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <HStack 
        width="100%"
       // maxW="1200px" 
        mx="auto"
        spacing={[2, 4]} // Responsive spacing
        overflowX="auto" // Allow horizontal scrolling on mobile
      >
        <Link to="/">
          <Button variant="ghost" color="white" _hover={{ bg: 'rgba(255,255,255,0.1)' }} size="sm">
            Home
          </Button>
        </Link>

        <Link to="/about">
          <Button variant="ghost" color="white" _hover={{ bg: 'rgba(255,255,255,0.1)' }} size="sm">
            About
          </Button>
        </Link>

        <Link to="/projects">
          <Button variant="ghost" color="white" _hover={{ bg: 'rgba(255,255,255,0.1)' }} size="sm">
            Projects
          </Button>
        </Link>

        <Link to="/Skills">
          <Button variant="ghost" color="white" _hover={{ bg: 'rgba(255,255,255,0.1)' }} size="sm">
            Skills
          </Button>
        </Link>

        <Link to="/socials">
          <Button variant="ghost" color="white" _hover={{ bg: 'rgba(255,255,255,0.1)' }} size="sm">
            Socials
          </Button>
        </Link>

        <Spacer />

        <Button 
          onClick={toggleColorMode} 
          variant="ghost" 
          color="white" 
          _hover={{ bg: 'rgba(255,255,255,0.1)' }}
          size="sm"
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Flex>
  )
}

export default Navbar