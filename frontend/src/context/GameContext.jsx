import { createContext, useState } from "react"
import PropTypes from "prop-types"

const INITIAL_GAME_STATE = {
    isGameOver: false,
    players : [],
    arrayLettersSelected : [],
}

export const GameContext = createContext(INITIAL_GAME_STATE)

const GameProvider = ({ children }) => {
    const [players, setPlayers] = useState(INITIAL_GAME_STATE.players)
    const [selectedLetters, setSelectedLetters]= useState(INITIAL_GAME_STATE.arrayLettersSelected)
    const [selectedLetter, setSelectedLetter] = useState(null)
    const [isCountdownRunning, setIsCountdownRunning] = useState(false)
    const [scores, setScores] = useState({})

    const handleLetterSelected = (letter) => {
        setSelectedLetter(letter);
        setIsCountdownRunning(true);
      }

    const value={
        players,
        setPlayers,
        selectedLetters,
        setSelectedLetters,
        selectedLetter,
        setSelectedLetter,
        isCountdownRunning,
        setIsCountdownRunning,
        scores,
        setScores,
        handleLetterSelected
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

GameProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default GameProvider