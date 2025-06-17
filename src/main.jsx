import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbar } from './Navbar.jsx'
import { Product } from './Product.jsx'
import { Hero } from './Hero.jsx'
import { Services } from './Services.jsx'
import { About } from './About.jsx'
import { Footer } from './Footer.jsx'
import { Sections } from './Sections.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Product />
    <Sections />
    <Services />
     <About />
    <Footer />
    
  </StrictMode>,
)
