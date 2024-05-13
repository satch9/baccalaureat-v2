import { Link } from 'react-router-dom'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'

const NavBar = () => {

    const signIn = ()=>{

    }

    const signOut = ()=>{

    }

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><h1 style={{ color:'#fff'}}>Baccalauréat</h1></Link>
            </div>
            <div className='menu-items'>
                <LoginOutlined style={{ fontSize: '32px', color: '#fff' }} onClick={()=>signIn()} />
                <LogoutOutlined style={{ fontSize: '32px', color: '#fff' }} onClick={()=>signOut()}/>
            </div>
        </nav>
    )
}

export default NavBar
