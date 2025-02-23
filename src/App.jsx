import Navbar from './components/navbar'
import {Route,Routes} from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import { Box   } from '@chakra-ui/react'
import Socials from './pages/Socials'
const App = () => {
  
  return ( 
    
    <Box >
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Socials' element={<Socials />} />

        </Routes> 

    </Box>
    
  )
}

export default App