import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from "./context/AuthContext"

import RootLayout from './_root/RootLayout.jsx'
import AuthLayout from './_auth/AuthLayout.jsx'
import SignInForm from './_auth/forms/SignInForm.jsx'
import SignUpForm from './_auth/forms/SignUpForm.jsx'
import Home from './_root/pages/Home';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/**Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>
          {/**Private Routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
