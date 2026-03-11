import Header from '../components/Header'
import Footer from '../components/Footer';
import Typewriter from '../components/Typewriter'
import Fold from '../components/Folders.jsx'
import { Space } from '../components/Space.jsx'
import { Logo } from '../components/Loading.jsx'
import { Feedback, FeedbackList } from '../components/FeedBack.jsx'
import axios from 'axios'

export default function FrontPage({ feedbacks, addFeedback, message }) {
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
                        <div>
                            {message && <p>{message}</p>}
                            <FeedbackList feedbacks={feedbacks} />
                            <Feedback addFeedback={addFeedback} />
                        </div>
                        <Space />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
{/*
            what todo

*/}