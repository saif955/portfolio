import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import { Box } from "@chakra-ui/react";
import Socials from "./pages/Socials";
const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Socials" element={<Socials />} />
      </Routes>
    </Box>
  );
};

export default App;
