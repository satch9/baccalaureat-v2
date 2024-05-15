import { useGameContext } from "../../hooks/useGame"

import Alphabet from "../../components/game/alphabet/Alphabet"
import CountdownTimer from "../../components/game/countDownTimer/CountDownTimer"
import RandomLetter from "../../components/game/randomLetter/RandomLetter"
import Paper from "../../components/game/paper/Paper"


const Game = () => {

    const {
        players,
        selectedLetters,
        handleLetterSelected,
        setSelectedLetters,
        isCountdownRunning
    } = useGameContext()

    console.log("players Game", players)
    console.log("lettersSelected Game", selectedLetters)

    return (
        <div className="game">
            <Alphabet selectedLetters={selectedLetters} />
            <RandomLetter
                selectedLetters={selectedLetters}
                handleLetterSelected={handleLetterSelected}
                setSelectedLetters={setSelectedLetters}
            />
            <CountdownTimer
                isCountdownRunning={isCountdownRunning}
            />
            <Paper selectedLetters={selectedLetters} />
        </div>
    )
}

export default Game
