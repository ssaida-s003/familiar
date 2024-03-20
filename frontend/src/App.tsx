import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import WallPapersPage from '@pages/WallPapersPage'
import FamilyShare from '@pages/FamilyShare.tsx'

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/display" element={<WallPapersPage />} />
    <Route path="/display/wallpapers" element={<WallPapersPage />} />
    <Route path="/display/share-family" element={<FamilyShare />} />
  </Routes>
)

function App() {
  const user = true
  return <BrowserRouter>{user && <AuthRoutes />}</BrowserRouter>
}

export default App
