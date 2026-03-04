import Header from '../components/Header'
import Footer from '../components/Footer';
import Typewriter from '../components/Typewriter'
import Fold from '../components/Folders.jsx'
import { Space } from '../components/Space.jsx'
import { Logo } from '../components/Loading.jsx'

export default function FrontPage() {
    return (
        <>
        Sup
            <div className="flex justify-center ">
                <div>
                    <Logo />
                    <div className="gap-10">
                        <Header />
                        <div className="max-w-[100%] w-[850px]">
                            <Typewriter />
                        </div>
                        <div className="">
                            <Fold />
                        </div>
                        <Space />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}