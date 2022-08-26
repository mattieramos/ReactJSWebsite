import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'
import { useMediaQuery } from 'react-responsive'

const Size = () => {
  const isTabletorMobile = useMediaQuery({ query: '(min-width:1224px)'})
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
    
  )
}

export default App