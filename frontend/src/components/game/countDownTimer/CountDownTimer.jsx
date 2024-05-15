import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'

import './countDownTimer.css'

const CountdownTimer = ({  isCountdownRunning }) => {
    const [countdown, setCountdown] = useState(null)
    const { chrono } = useParams()

    useEffect(() => {
        if (isCountdownRunning) {
            setCountdown(chrono) // Démarre le décompte à 60 lorsque selectedLetter est défini
        } else {
            setCountdown(null) // Réinitialise le décompte lorsque selectedLetter est null
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCountdownRunning])

    useEffect(() => {
        let timer
        if (countdown > 0 && isCountdownRunning) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000)
        } else {
            clearInterval(timer)
        }

        return () => clearInterval(timer)
    }, [countdown, isCountdownRunning])

    return (
        <div className='countdowntimer'>
            {countdown !== null && countdown >= 0 && <span className='timerCircle'><span className='timer'>{countdown}</span></span>}
        </div>
    );
};

CountdownTimer.propTypes = {
    isCountdownRunning: PropTypes.bool.isRequired
};

export default CountdownTimer;