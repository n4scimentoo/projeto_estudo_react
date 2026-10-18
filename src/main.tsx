import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Home/Componentes/Header.tsx'
import Search from './Home/Componentes/Search.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container-complete">
      <Header />
      <Search />  
    </div>
  </StrictMode>,
)
 