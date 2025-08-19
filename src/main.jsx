import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
//import './index.css'
import Home from './pages/Home' //componente

/*
Importar:

Utilizamos o import App from './App.jsx' --> para apenas um item dentro do nosso componete (default);

Utilizamos o import { App, App2 } from './App.jsx' --> para mais de um item do nosso componente (s/ default).

*/

createRoot(document.getElementById('root')).render( //tudo que estiver entre <StrictMode> será injetado no html (div#root)
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
