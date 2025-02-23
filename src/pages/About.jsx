import darkImage from '../images/pexels-francesco-ungaro-998641.jpg';
import lightImage from '../images/pexels-lastly-937782.jpg';
import profilepic from '../images/crop.jpg'
import { Box, Center,  Text, Image, useMediaQuery, Flex, Button } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import { motion, MotionConfig } from 'framer-motion'
import { ArrowDownIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@chakra-ui/icons';
const About = () => {
  const textGradient = useColorModeValue(
    'linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))',
    'linear(to-l, rgb(82, 173, 73), rgb(255, 255, 255))'
  )
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

  const transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1]
  }

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Flex
          backgroundImage={useColorModeValue(`url(${lightImage})`, `url(${darkImage})`)}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          minH="100vh"
          w="100%"
          p={[4, 6, 8]}
          align="center"
          justify="center"
          overflowX="hidden"
        >
          <Center 
            backdropFilter='auto'
            backdropBlur='5px'
            w="100%"
            maxW="1200px"
          >
            <Flex 
              direction={isLargerThan768 ? 'row' : 'column'} 
              align="center"
              gap={[8, 12]}
              w="100%"
            >
              {/* Text Content */}
              <motion.div
                initial={{ x: isLargerThan768 ? 200 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={transition}
                style={{ width: '100%', maxWidth: '600px' }}
              >
                <Box>
                  <Text 
                    fontSize={{ base: '2xl', md: '4xl' }} 
                    bgGradient={textGradient} 
                    bgClip="text"
                    mb={4}
                  >
                    About me 
                  </Text>
                  <Text 
                    bgGradient={textGradient} 
                    bgClip="text" 
                    textAlign="justify"
                    fontSize={{ base: 'md', md: 'lg' }}
                    lineHeight={{ base: 1.6, md: 1.8 }}
                  >
                    I am a Computer Science graduate proficient in full-stack development, data analysis, and machine
                    learning. Familiar with applying Python (Pandas, NumPy, Matplotlib) to derive insights and visualize
                    complex datasets, and proficient in building scalable backends using Django and Express.js.
                    Experienced with front-end development using JavaScript and React to create dynamic interfaces.
                    Familiar with SQL for database maintenance/design and Git/GitHub for collaborative version control.
                  </Text>
                </Box>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ y: isLargerThan768 ? 200 : 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={transition}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: 4 
                }}
              >
                <Text 
                  fontSize={{ base: 'xl', md: '3xl' }} 
                  textAlign='center'  
                  bgGradient={textGradient} 
                  bgClip="text"
                >
                  This is me <br />
                  <ArrowDownIcon color={useColorModeValue('gray.700', 'white')} />
                </Text>
                <Image
                  borderRadius='full'
                  boxSize={{ base: '200px', md: '400px' }}
                  objectFit='cover'
                  backgroundImage={useColorModeValue(`url(${profilepic})`, `url(${profilepic})`)}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  alt='Saifur Rahman'
                  border={`4px solid ${useColorModeValue('rgba(0,0,0,0.1)', 'rgba(255,255,255,0.1)')}`}
                />
              </motion.div>
              <Link to="/Projects">
                <Button
                  bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                  size="md"
                  rightIcon={<ArrowRightIcon />}
                  mt={4}
                  alignSelf="flex-start"
                >
                  Continue
                </Button>
              </Link>
            </Flex>
            
          </Center>
        </Flex>
      </motion.div>
    </MotionConfig>
  )
}

export default About