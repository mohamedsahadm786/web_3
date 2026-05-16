import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import FloatWhatsApp from './components/FloatWhatsApp'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import { useLenis } from './hooks/useLenis'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  useLenis()
  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      <ScrollProgress />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatWhatsApp />
    </MotionConfig>
  )
}
