import { useEffect } from 'react'
import { useParams } from "react-router-dom"

import './countDownTimer.css'

import { useGameContext } from '../../../hooks/useGame';

const CountdownTimer = () => {
    const {
        isCountdownRunning,
        countDown,
        setCountDown
    } = useGameContext()

    const { chrono } = useParams()

    useEffect(() => {
        if (isCountdownRunning) {
            setCountDown(chrono) // Démarre le décompte à 60 lorsque selectedLetter est défini
        } else {
            setCountDown(null) // Réinitialise le décompte lorsque selectedLetter est null
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCountdownRunning])

    useEffect(() => {
        let timer
        if (countDown > 0 && isCountdownRunning) {
            timer = setInterval(() => {
                setCountDown(prevCountdown => prevCountdown - 1);
            }, 1000)
        } else {
            clearInterval(timer)
        }

        return () => clearInterval(timer)
    }, [countDown, isCountdownRunning, setCountDown])

    return (
        <div className='countdowntimer'>
            {countDown !== null && countDown >= 0 && <span className='timerCircle'><span className='timer'>{countDown}</span></span>}
        </div>
    );
};

export default CountdownTimer;