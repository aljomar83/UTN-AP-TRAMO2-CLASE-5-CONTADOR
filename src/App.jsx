import { useState } from 'react'

import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main.Jsx'
import { Footer } from './Components/Footer/Footer'

function App() {
 

  return (
    <ChakraProvider>
      <Header/>
      <Main/>
      <Footer/>
    </ChakraProvider>  
  )
}

export default App
