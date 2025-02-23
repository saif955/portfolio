import lightImage from '../images/background1.gif';
import darkImage from '../images/nightcity.gif';
import { Box, Container, Text, Center, Button, Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useColorModeValue } from "@chakra-ui/react"
import { ArrowRightIcon } from "@chakra-ui/icons"
import { motion, MotionConfig } from 'framer-motion'

const Home = () => {
  const textColorGradient = useColorModeValue(
    'linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))',
    'linear(to-l, rgb(82, 173, 73), rgb(255, 255, 255))'
  )
  
  const transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1]
  }

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box
          minH="100vh"
          position="relative"
          overflowX="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: useColorModeValue(`url(${lightImage})`, `url(${darkImage})`),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(8px)", // Adjust blur intensity here
            zIndex: -1,
          }}
        >
          <Center minH="100vh" p={[4, 6, 8]}>
            <motion.div
              initial={{ x: [-50, -200], opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
              style={{ width: '100%' }}
            >
              <Container 
                maxW="container.lg" 
                centerContent 
                textAlign={{ base: 'center', md: 'left' }}
                position="relative" // Ensure content stays above blurred background
              >
                <Flex direction="column" gap={6}>
                  {/* Content remains the same as previous version */}
                  <Text
                    fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                    bgGradient={textColorGradient}
                    bgClip="text"
                    lineHeight={1.2}
                    fontWeight="bold"
                  >
                    Hello, my name is<br />Saifur Rahman
                  </Text>

                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                    fontWeight="medium"
                  >
                    Web Developer
                  </Text>

                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    bgGradient={textColorGradient}
                    bgClip="text"
                    textAlign={{ base: 'left', md: 'justify' }}
                    lineHeight={{ base: 1.6, md: 1.8 }}
                    maxW="600px"
                  >
                    Welcome to my portfolio. Explore using the navigation above or continue 
                    to the next page below.
                  </Text>

                  <Link to="/about" style={{ alignSelf: 'flex-start' }}>
                    <Button 
                      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                      size={{ base: 'md', md: 'lg' }}
                      rightIcon={<ArrowRightIcon />}
                      mt={{ base: 4, md: 8 }}
                    >
                      Continue
                    </Button>
                  </Link>
                </Flex>
              </Container>
            </motion.div>
          </Center>
        </Box>
      </motion.div>
    </MotionConfig>
  )
}

export default Home