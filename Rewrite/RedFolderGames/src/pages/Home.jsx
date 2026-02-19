import Header from '../components/Header'
import Footer from '../components/Footer';
import Typewriter from '../components/Typewriter'
import Mark from '../components/Bookmarks.jsx'
import { Space } from '../components/Space.jsx'
import { Logo } from '../components/Loading.jsx'

export default function FrontPage() {
    return (
        <>
            <Header />
            <div className="max-w-[100%] w-[850px]">
                <Logo />
                <Typewriter />
            </div>
            <div className="flex justify-center flex-col">
                <Mark />
            </div>
            <Space />
            <Footer />
        </>
    )
}