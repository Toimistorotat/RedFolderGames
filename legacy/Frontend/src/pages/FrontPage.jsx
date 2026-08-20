import '../css/Frontpage.css'
import Header from '../Header'
import Footer from '../Footer';
import Typewriter from '../extras/Typewriter'
import Mark from '../extras/Bookmarks.jsx'
import Space from '../extras/Emptyspace.jsx'
import Button from '@mui/material/Button'
export default function FrontPage() {
    return (
        <> 
            <Header />
            <p>sup</p>
            <div class="Container">
                <Typewriter />
            </div>
            <div>
                <Mark />
            </div>
            <Space />
            <Footer />
        </>
    )
}