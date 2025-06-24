import { Navbar } from './Navbar.jsx'
import { Product } from './Product.jsx'
import { Hero } from './Hero.jsx'
import { Services } from './Services.jsx'
import { About } from './About.jsx'
import { Footer } from './Footer.jsx'
import { Sections } from './Sections.jsx'

export const Home=()=>{
    return(
        <>
        
        {/* <Navbar /> */}
            <Hero />
            <Product />
            <Sections />
            <Services />
            <About />
            {/* <Footer /> */}
        </>
    )
}