import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

const INITIAL_GAME_STATE = {
    isGameOver: false,
    players: [],
    arrayLettersSelected: [],
}

export const GameContext = createContext(INITIAL_GAME_STATE)

const GameProvider = ({ children }) => {
    const [players, setPlayers] = useState(INITIAL_GAME_STATE.players)
    const [selectedLetters, setSelectedLetters] = useState(INITIAL_GAME_STATE.arrayLettersSelected)
    const [selectedLetter, setSelectedLetter] = useState(null)
    const [countDown, setCountDown] = useState(null)
    const [isCountdownRunning, setIsCountdownRunning] = useState(false)
    const [scores, setScores] = useState({})

    const handleLetterSelected = (letter) => {
        if (!selectedLetters.includes(letter)) {
            setSelectedLetter(letter);
            setIsCountdownRunning(true);
        }
    }

    // Add your useEffect hook here

    useEffect(() => {

        if (countDown === 0 && selectedLetter) {
            setSelectedLetters([...selectedLetters, selectedLetter])
            setSelectedLetter(null)
            setCountDown(null)
            setIsCountdownRunning(false)
        }

    }, [countDown, selectedLetter, selectedLetters])

    const value = {
        players,
        setPlayers,
        selectedLetters,
        setSelectedLetters,
        selectedLetter,
        setSelectedLetter,
        countDown,
        setCountDown,
        isCountdownRunning,
        setIsCountdownRunning,
        scores,
        setScores,
        handleLetterSelected,
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