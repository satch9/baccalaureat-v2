import { createContext, useEffect, useState } from "react"
import { getCurrentPlayer } from '../lib/appwrite/api'
import { useNavigate } from 'react-router-dom'
import PropTypes from "prop-types"

const INITIAL_STATE = {
    player: {},
    isLoading: false,
    isAuthenticated: false,
    setPlayer: () => { },
    setIsAuthenticated: () => { },
    checkAuthPlayer: async () => false
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthProvider = ({ children }) => {
    const [player, setPlayer] = useState(INITIAL_STATE.player)
    const [isLoading, setIsLoading] = useState(INITIAL_STATE.isLoading)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const navigate = useNavigate()

    const checkAuthPlayer = async () => {
        setIsLoading(true)
        try {
            const currentAccount = await getCurrentPlayer()

            console.log('currentAccount AuthContext ', currentAccount)

            if (currentAccount) {
                setPlayer({
                    id: currentAccount.$id,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    password: ''
                })
                setIsAuthenticated(true)
                return true
            }

            return false

        } catch (error) {
            console.log(error)
            return false
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const cookieFallBack = localStorage.getItem('cookieFallBack')
        if (
            cookieFallBack === '[]' ||
            cookieFallBack === null ||
            cookieFallBack === undefined
        ) {
            navigate('/sign-in')
        }

        checkAuthPlayer()
    }, [navigate])

    const value = {
        player,
        setPlayer,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthPlayer
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider