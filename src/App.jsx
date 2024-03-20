import Inicio from "./components/Inicio"
import Navbar from "./components/Navbar"
import Eventos from "./components/Eventos"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Idioma from "./components/Idioma"
import { ChakraProvider } from "@chakra-ui/react"

function App() {

  return (
    <ChakraProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/menu" element={<Idioma />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
