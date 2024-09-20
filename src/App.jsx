import Inicio from "./components/Inicio"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import LogIn from "./components/LogIn"
import Carta from "./components/Carta"

function App() {

  return (
    <ChakraProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/menu" element={<Carta />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
        <Route path="/adminbruta" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
