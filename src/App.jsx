import Episodios from "./Componentes/Episodios/episodios"
import Galeria from "./Componentes/Galeria/galeria"
import Header from "./Componentes/Header/header"
import Home from "./Componentes/Home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} /> 
        <Route path="/episodios" element={<Episodios/>} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
