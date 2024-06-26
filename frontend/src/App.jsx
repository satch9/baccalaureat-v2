import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from "./context/AuthContext"
import GameProvider from './context/GameContext.jsx'

import AuthLayout from './_auth/AuthLayout.jsx'
import SignInForm from './_auth/forms/SignInForm.jsx'
import SignUpForm from './_auth/forms/SignUpForm.jsx'

import RootLayout from './_root/RootLayout.jsx'
import Home from './_root/pages/Home.jsx'
import Parameters from './_root/pages/Parameters.jsx'
import ListGame from './_root/pages/ListGame.jsx'
import Scoreboard from './_root/pages/Scoreboard.jsx'
import Game from './_root/pages/Game.jsx'


function App() {

  return (
    <Router>
      <AuthProvider>
        <GameProvider>
          <Routes>
            {/**Public Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Route>
            {/**Private Routes */}
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/parameters" element={<Parameters />} />
              <Route path="/list-game/:categorie?/:chrono?" element={<ListGame />} />
              <Route path="/game/:nom/:categorie/:chrono" element={<Game />} />
              <Route path="/scoreboard" element={<Scoreboard />} />
            </Route>
          </Routes>
        </GameProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
