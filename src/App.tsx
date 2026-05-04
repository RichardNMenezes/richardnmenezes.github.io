import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="/privacy/:slug" element={<PrivacyPage />} />
    </Routes>
  )
}
