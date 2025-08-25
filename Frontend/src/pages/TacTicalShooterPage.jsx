import '../css/TTShooter.css'
import Header from '../HeaderTTS'
import Button from '@mui/material/Button'
export default function TacTicalshooter() {
    return (
        <> 
        <Header></Header>
            <div className="d-flex flex-column justify-content-start" style={{width: "1800px"}}>
                <div className="align-self-end">
                    <h1 className="text-center">TacTical Shooter</h1>
                    <p>blalblbalbla</p>  <b>Ahh Yes</b>  <p>blablablbalab</p>
                    <i>Testing Testing Kill All Humans</i>
                </div>
                <div className="align-self-start">
                    <h2>About The Game</h2>
                    <p>Test</p>
                </div>
            </div>
        </>
    )
}