import darkImage from '../images/pexels-francesco-ungaro-998641.jpg';
import lightImage from '../images/pexels-lastly-937782.jpg';
import { Center, useColorModeValue, Flex, Box, VStack, Text, Button } from '@chakra-ui/react';
import { motion, MotionConfig } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from "@chakra-ui/icons"

const Projects = () => {
  const textGradient = useColorModeValue(
    'linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))',
    'linear(to-l, rgb(82, 173, 73), rgb(255, 255, 255))'
  );

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Flex
          backgroundImage={useColorModeValue(`url(${lightImage})`, `url(${darkImage})`)}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          minH="100vh"
          w="100%"
          p={[4, 8]}
          direction={["column", "row"]}
        >
          <Center w="100%">
            <VStack
              spacing={6}
              w="100%"
              maxW="1200px"
              px={[2, 4]}
              divider={<Box borderColor="gray.200" />}
            >
              {/* Project 1 */}
              <Link to="https://github.com/saif955/cultural-diffusion" target="_blank" style={{ width: '100%' }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Box
                    p={[4, 6]}
                    borderRadius="lg"
                    bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                    backdropFilter="blur(10px)"
                    w="100%"
                    boxShadow="lg"
                  >
                    <Text
                      bgGradient={textGradient}
                      bgClip="text"
                      fontSize={['md', 'xl']}
                      lineHeight={1.6}
                      fontWeight="semibold"
                    >
                      How much culture is diffused in diffusion models
                    </Text>
                    <Text
                      mt={3}
                      fontSize={['sm', 'md']}
                      color={useColorModeValue('gray.700', 'gray.300')}
                    >
                      Three advanced diffusion models—DreamShaper, Realistic Vision, and JaggurnautXL—were selected to
                      assess cultural accuracy in image generation. Designed culturally specific prompts representing
                      diverse countries and regions to evaluate the models&apos; ability to generate accurate and
                      representative imagery.
                    </Text>
                  </Box>
                </motion.div>
              </Link>

              {/* Project 2 */}
              <Link to="https://github.com/saif955/Cybersentio-Advanced-Social-Media-Threat-Detection-System-" target="_blank" style={{ width: '100%' }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: '100%' }}>
                <Box
                  p={[4, 6]}
                  borderRadius="lg"
                  bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                  backdropFilter="blur(10px)"
                  w="100%"
                  boxShadow="lg"
                >
                  <Text
                    bgGradient={textGradient}
                    bgClip="text"
                    fontSize={['md', 'xl']}
                    lineHeight={1.6}
                    fontWeight="semibold"
                  >
                    Cybersentio
                  </Text>
                  <Text
                    mt={3}
                    fontSize={['sm', 'md']}
                    color={useColorModeValue('gray.700', 'gray.300')}
                  >
                    Advanced Social Media Threat Detection System 
                    Trained Several different models, such as; SVM, Decision Tree, Random forest, Adaboost and logistic regression classifier on different sets of social media toxic comment analysis datasets.
                    Exploratory data analysis and data pre-processing was done on the datasets and new custom features were added using feature engineering.
                    Created a web application and used API calls to use the model to create a text bot that will evaluate a given text as toxic.
                  </Text>
                </Box>
              </motion.div></Link>

              {/* Project 3 */}
              <Link to="https://github.com/saif955/chatbot" target="_blank" style={{ width: '100%' }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: '100%' }}>
                <Box
                  p={[4, 6]}
                  borderRadius="lg"
                  bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.6)')}
                  backdropFilter="blur(10px)"
                  w="100%"
                  boxShadow="lg"
                >
                  <Text
                    bgGradient={textGradient}
                    bgClip="text"
                    fontSize={['md', 'xl']}
                    lineHeight={1.6}
                    fontWeight="semibold"
                  >
                    Chatbot app
                  </Text>
                  <Text
                    mt={3}
                    fontSize={['sm', 'md']}
                    color={useColorModeValue('gray.700', 'gray.300')}
                  >
                  Acquired, modified and deployed various Hugging Face models locally to determine and evaluate the optimal large language model for the application.
                  Developed a robust backend with Django for a web application to interact with this chatbot, featuring smooth data management and interaction.
                  Designed the web application frontend in HTML and CSS to develop an intuitive, user-friendly interface.
                  Integrated the web application with the Hugging Face API for testing and validation, ensuring all the functionalities were well implemented.
                  </Text>
                  
                </Box>
                
              </motion.div></Link>

              <Link to="/Skills">
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
            </VStack>
          </Center>
        </Flex>
      </motion.div>
    </MotionConfig>
  );
};

export default Projects;