import Alphabet from "../../components/game/alphabet/Alphabet"
import CountdownTimer from "../../components/game/countDownTimer/CountDownTimer"
import RandomLetter from "../../components/game/randomLetter/RandomLetter"
import Paper from "../../components/game/paper/Paper"


const Game = () => {

    return (
        <div className="game">
            <Alphabet />
            <RandomLetter />
            <CountdownTimer />
            <Paper  />
        </div>
    )
}

export default Game
