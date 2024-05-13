import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import NavBar from '../components/navbar/NavBar';
const { Content, Footer } = Layout

const RootLayout = () => {
    
    return (
        <Layout>
            <NavBar />
        <Content>
            <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Baccalauréat - React AntD AppWrite</Footer>
        </Layout>
    )
}

export default RootLayout
