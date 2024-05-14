import { Link } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'
import { usePlayerContext } from '../../hooks/usePlayer'
import { Tooltip } from "antd"
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../lib/appwrite/api'

const NavBar = () => {

    const { isAuthenticated, setIsAuthenticated, setPlayer } = usePlayerContext()
    const navigate = useNavigate()
    console.log("isAuthenticated NavBar", isAuthenticated)

    const signOutFonction = async () => {
        await signOut()
        
        localStorage.removeItem('cookieFallBack')
        setPlayer({})
        setIsAuthenticated(false)
        navigate("/sign-in")
    }
    {/* <LoginOutlined style={{ fontSize: '32px', color: '#fff' }} onClick={()=>signIn()} /> */ }

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><h1 style={{ color: '#fff' }}>Baccalauréat</h1></Link>
            </div>
            <div className='menu-items'>
                {isAuthenticated == true ? (
                    <Tooltip title="Déconnexion">
                        <LogoutOutlined style={{ fontSize: '32px', color: '#fff' }} onClick={() => signOutFonction()} />
                    </Tooltip>
                ) : ""}
            </div>
        </nav>
    )
}

export default NavBar
