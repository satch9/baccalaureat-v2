import { Link } from 'react-router-dom'
import { LogoutOutlined, ControlOutlined, OrderedListOutlined, ProfileOutlined } from '@ant-design/icons'
import { usePlayerContext } from '../../hooks/usePlayer'
import { Tooltip } from "antd"
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../lib/appwrite/api'

const NavBar = () => {

    const { isAuthenticated, setIsAuthenticated, setPlayer } = usePlayerContext()
    const navigate = useNavigate()
    //console.log("isAuthenticated NavBar", isAuthenticated)

    const signOutFonction = async () => {
        await signOut()

        localStorage.removeItem('cookieFallBack')
        setPlayer({})
        setIsAuthenticated(false)
        navigate("/sign-in")
    }

    const onParameters = () => {
        navigate("/parameters")
    }

    const onListGame = () => {
        navigate("/list-game")
    }

    const onScoreBoard = () => {
        navigate("/score-board")
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><h1 style={{ color: '#fff' }}>Baccalauréat</h1></Link>
            </div>
            <div className='menu-items'>
                {isAuthenticated == true ? (
                    <>
                        <Tooltip title="Paramètres">
                            <ControlOutlined style={{ fontSize: '24px', color: '#fff' }} onClick={() => onParameters()} />
                        </Tooltip>
                        <Tooltip title="Liste de jeux">
                            <ProfileOutlined style={{ fontSize: '24px', color: '#fff' }} onClick={() => onListGame()} />
                        </Tooltip>
                        <Tooltip title="Tableau des scores">
                            <OrderedListOutlined style={{ fontSize: '24px', color: '#fff' }} onClick={() => onScoreBoard()} />
                        </Tooltip>
                        <Tooltip title="Déconnexion">
                            <LogoutOutlined style={{ fontSize: '24px', color: '#fff' }} onClick={() => signOutFonction()} />
                        </Tooltip>

                    </>

                ) : ""}
            </div>
        </nav>
    )
}

export default NavBar
