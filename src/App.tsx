import './index.css'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { Features } from './components/Features'
import { OwnerProfiles } from './components/OwnerProfiles'
import { WaitlistCTA } from './components/WaitlistCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Hero />
      <PainPoints />
      <Features />
      <OwnerProfiles />
      <WaitlistCTA />
      <Footer />
    </div>
  )
}

export default App
