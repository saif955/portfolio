import darkImage from "../images/pexels-francesco-ungaro-998641.jpg";
import lightImage from "../images/pexels-lastly-937782.jpg";
import {
  Center,
  useColorModeValue,
  Flex,
  Box,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";

const WorkExperience = () => {
  const textGradient = useColorModeValue(
    "linear(to-l, rgb(88, 8, 8), rgba(11, 85, 107, 0.8))",
    "linear(to-l, rgb(82, 173, 73), rgb(255, 255, 255))",
  );

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Flex
          backgroundImage={useColorModeValue(
            `url(${lightImage})`,
            `url(${darkImage})`,
          )}
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
              {/* Work Experience 1 */}
              <Link to="#" style={{ width: "100%" }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: "100%" }}
                >
                  <Box
                    p={[4, 6]}
                    borderRadius="lg"
                    bg={useColorModeValue(
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(0, 0, 0, 0.6)",
                    )}
                    backdropFilter="blur(10px)"
                    w="100%"
                    boxShadow="lg"
                  >
                    <Text
                      bgGradient={textGradient}
                      bgClip="text"
                      fontSize={["md", "xl"]}
                      lineHeight={1.6}
                      fontWeight="semibold"
                    >
                      Junior Business Development Executive — IMPIT Limited
                      (Nov-2025 — Jan-2026)
                    </Text>
                    <Text
                      mt={3}
                      fontSize={["sm", "md"]}
                      color={useColorModeValue("gray.700", "gray.300")}
                    >
                      Understand client and vendor needs and overseeing timely
                      and accurate service delivery.
                    </Text>
                  </Box>
                </motion.div>
              </Link>

              {/* Work Experience 2 */}
              <Link to="#" style={{ width: "100%" }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: "100%" }}
                >
                  <Box
                    p={[4, 6]}
                    borderRadius="lg"
                    bg={useColorModeValue(
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(0, 0, 0, 0.6)",
                    )}
                    backdropFilter="blur(10px)"
                    w="100%"
                    boxShadow="lg"
                  >
                    <Text
                      bgGradient={textGradient}
                      bgClip="text"
                      fontSize={["md", "xl"]}
                      lineHeight={1.6}
                      fontWeight="semibold"
                    >
                      Software Engineer Internship — Imranslab (Sept — 2025)
                    </Text>
                    <Text
                      mt={3}
                      fontSize={["sm", "md"]}
                      color={useColorModeValue("gray.700", "gray.300")}
                    >
                      Remote Software Engineering Intern at Imranslab, a
                      Canada-based software engineering company, where I gained
                      hands-on experience in real-world software development and
                      contributed to ongoing projects.
                    </Text>
                  </Box>
                </motion.div>
              </Link>

              {/* Work Experience 3 */}
              <Link to="#" style={{ width: "100%" }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ width: "100%" }}
                >
                  <Box
                    p={[4, 6]}
                    borderRadius="lg"
                    bg={useColorModeValue(
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(0, 0, 0, 0.6)",
                    )}
                    backdropFilter="blur(10px)"
                    w="100%"
                    boxShadow="lg"
                  >
                    <Text
                      bgGradient={textGradient}
                      bgClip="text"
                      fontSize={["md", "xl"]}
                      lineHeight={1.6}
                      fontWeight="semibold"
                    >
                      Operations and Data Integration Specialist —
                      BOHUBRIHI-বহুব্রীহি (July-2025 - Aug-2025)
                    </Text>
                    <Text
                      mt={3}
                      fontSize={["sm", "md"]}
                      color={useColorModeValue("gray.700", "gray.300")}
                    >
                      Collected, processed, and visualized sales data to show
                      performance across different dimensions, including
                      regional performance, product category success, and sales
                      trend analysis over time. This enabled leadership to
                      identify key growth opportunities, optimize inventory
                      allocation, and increase overall sales efficiency.
                    </Text>
                  </Box>
                </motion.div>
              </Link>

              <Link to="/Skills">
                <Button
                  bg={useColorModeValue(
                    "rgba(255, 255, 255, 0.8)",
                    "rgba(0, 0, 0, 0.6)",
                  )}
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

export default WorkExperience;
