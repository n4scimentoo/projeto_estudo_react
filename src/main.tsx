import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Home/Componentes/Header.tsx'
import Filter from './Home/Componentes/Filter.tsx'
import Footer from './Home/Componentes/Footer.tsx'
import ContentCurso from './Home/Componentes/ContentCurso.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="h-screen font-[sen] bg-(--cor-fundo--principal) flex flex-col items-center">
      <Header />
      <main className="flex flex-col items-center justify-center w-full ">
        <Filter/>  
        <ContentCurso />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
 