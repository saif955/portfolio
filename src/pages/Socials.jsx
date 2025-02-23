// Add this at the top of your imports
import {  Text, useMediaQuery} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Center } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { MotionConfig, motion } from "framer-motion"
import { useColorModeValue } from "@chakra-ui/react"
import  darkImage from '../images/pexels-francesco-ungaro-998641.jpg';
import  lightImage from '../images/pexels-lastly-937782.jpg';
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ArrowRightIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
const Socials = () => {
    const isLargerThan768 = useMediaQuery("(min-width: 768px)");
    const textGradient = useColorModeValue(
        'linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))',
        'linear(to-l, rgb(82, 173, 73), rgb(255, 255, 255))'
      )
      const transition = {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
      
    
  return (

    <MotionConfig transition={{ duration: 1 }} >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <Flex
              backgroundImage={useColorModeValue(`url(${lightImage})`, `url(${darkImage})`)}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              minH="100vh"
              w="100%"
              p={[4, 8]}
              align="center"
              justify="center"
              overflowX="hidden"
                       
            >
              <Center w="100%" width={{ base: "100%", md: "50%" }}>
              
              <motion.div
                initial={{ x: isLargerThan768 ? 200 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={transition}
                style={{ width: '100%', maxWidth: '600px' }}
              >
                    <Flex direction={{ base: "column", md: "row" }} gap={4} alignItems="center" minW={"100%"}p={[4, 6]}
                    borderRadius="lg"
                    bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                    backdropFilter="blur(10px)"
                    boxShadow="lg"
                    justifyContent={"space-evenly"}>
                    
                    <Link to="https://github.com/saif955" target="_blank">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FaGithub size={50} color={useColorModeValue('black', 'white')} />
                    <Text bgGradient={textGradient}
                      bgClip="text"
                      fontSize={['md', 'xl']}
                      lineHeight={1.6}
                      fontWeight="semibold">Github</Text>
                      </motion.div>
                    </Link>
                    
                    
                    <Link to="https://www.facebook.com/saifur.rahman.94801116/" target="_blank">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FaFacebook size={50} color={'#316FF6'} />
                    <Text bgGradient={textGradient}
                      bgClip="text"
                      fontSize={['md', 'xl']}
                      lineHeight={1.6}
                      fontWeight="semibold">Facebook</Text>
                      </motion.div>
                    </Link>
                    
                    
                    <Link to="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=saif.rahman.95595@gmail.com&hl=en" target="_blank">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SiGmail  size={50} color={'#EA4335'} />
                    <Text bgGradient={textGradient}
                      bgClip="text"
                      fontSize={['md', 'xl']}
                      lineHeight={1.6}
                      fontWeight="semibold">Gmail</Text>
                      </motion.div>
                    </Link>
                    
                    
                    <Link to="https://www.linkedin.com/in/saifur-rahman-99a606290/" target="_blank">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FaLinkedin size={50} color={'#0072B1'} />
                    <Text bgGradient={textGradient}
                      bgClip="text"
                      fontSize={['md', 'xl']}
                      lineHeight={1.6}
                      fontWeight="semibold">Linkedin</Text>
                      </motion.div>
                    </Link>
                    
                    
                   </Flex>
                   <Link to="/">
                                    <Button
                                      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                                      size="md"
                                      rightIcon={<ArrowRightIcon />}
                                      mt={4}
                                      alignSelf="center"
                                      _hover={{
                                        bg: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)'),
                                      }}
                                    >
                                      Back to Home
                                    </Button>
                                  </Link>
                     </motion.div> 
                    </Center> 
                  </Flex>
                  </motion.div>
               </MotionConfig>
    )
}

export default Socials