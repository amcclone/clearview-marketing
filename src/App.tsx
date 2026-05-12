import './index.css'
import { Hero } from './components/Hero'
import { ConnectsTo } from './components/ConnectsTo'
import { PainPoints } from './components/PainPoints'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { SocialProof } from './components/SocialProof'
import { OwnerProfiles } from './components/OwnerProfiles'
import { WaitlistCTA } from './components/WaitlistCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Hero />
      <ConnectsTo />
      <PainPoints />
      <HowItWorks />
      <Features />
      <SocialProof />
      <OwnerProfiles />
      <WaitlistCTA />
      <Footer />
    </div>
  )
}

export default App
