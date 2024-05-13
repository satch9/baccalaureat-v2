import { Outlet, Navigate } from 'react-router-dom'
import { usePlayerContext } from '../hooks/usePlayer'

const AuthLayout = () => {
    const { isAuthenticated } = usePlayerContext()

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <div className="authLayout">
                    <section className="signIn">
                        <Outlet />
                    </section>

                    <img
                        src="/assets/images/side-img.svg"
                        alt="logo"
                        className="signInImage"
                    />
                </div>
            )}
        </>
    )
}

export default AuthLayout
