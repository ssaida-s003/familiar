import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/HomePage'

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
)

function App() {
  const user = true
  return <BrowserRouter>{user && <AuthRoutes />}</BrowserRouter>
}

export default App
