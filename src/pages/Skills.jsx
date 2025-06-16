import { Flex, VStack } from '@chakra-ui/react'
import  darkImage from '../images/pexels-francesco-ungaro-998641.jpg';
import  lightImage from '../images/pexels-lastly-937782.jpg';
import { useColorModeValue } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { motion, MotionConfig }  from 'framer-motion'
import { useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
    const textGradient = useColorModeValue(
        'linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))',
        'linear(to-l, rgb(82, 173, 73), rgb(255, 255, 255))'
      )
     const isLargerThan768 = useMediaQuery("(min-width: 768px)")
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
                w="100%"
                maxW="1200px"> 
                <motion.div
                initial={{ x: isLargerThan768 ? 200 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={transition}
                style={{ width: '100%', maxWidth: '600px' }}
              >
                <Box
                  p={[4, 6]}
                  borderRadius="lg"
                  bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                  backdropFilter="blur(10px)"
                  w="100%"
                  boxShadow="lg">
                <Text
                    bgGradient={textGradient}
                    bgClip="text"
                    fontSize={['xl', '4xl']}
                    lineHeight={1.6}
                    fontWeight="semibold"
                    textAlign="justify"
                    borderRadius='md'
                    p={2}
                  >
                    Skills
                  </Text>
                  <Text
                    bgGradient={textGradient}
                    bgClip="text"
                    fontSize={['xl', 'xl']}
                    lineHeight={1.6}
                    fontWeight="semibold"
                    textAlign="left"
                    borderRadius='md'
                    p={2}
                  >
                Data analysis tools: Pandas, NumPy, Matplotlib <br />
                Programming Languages: Python, Java, JavaScript, C++, HTML, CSS <br />
                Backend: Django, Express, Node<br />
                Machine learning framework: Scikit-learn<br />
                Version control systems: Git/GitHub<br />
                Database: MySQL, MongoDB<br />
                Soft Skills: Problem-solving, Analytical thinking, Teamwork, 
                Time management, Adaptability<br />
                Frontend: React, Chakra UI, Bootstrap<br />
                </Text>
            </Box>
            <Link to="/Socials">
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

              
              


         </motion.div> 
         
     </Center>
     <motion.div
                initial={{ x: isLargerThan768 ? 200 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={transition}
              >
     <VStack spacing={[4,6,8]}>
     <FaReact size='5rem' color='#61DAFB'/>
     <FaNodeJs size='5rem' color='#3C873A'/>
     <SiDjango size='5rem' color='#092E70'/>
     <SiExpress size='5rem' color='white'/>
     <FaPython size='5rem' color='#3776AB'/>
     <IoLogoJavascript size='5rem' color='#F7DF1E' />

     </VStack>
     </motion.div>
    </Flex>
    </motion.div>
    </MotionConfig>
  )
}

export default Skills