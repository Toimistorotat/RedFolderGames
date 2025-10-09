import '../css/Frontpage.css'
import Header from '../Header'
import Footer from '../Footer';
import Typewriter from '../extras/Typewriter'
import Button from '@mui/material/Button'
export default function FrontPage() {
    return (
        <> 
            <Header />
            <p>sup</p>
            <div class="Container">
                <Typewriter />
            </div>
            <Footer />
        </>
    )
}