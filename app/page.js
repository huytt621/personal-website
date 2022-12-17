import { Footer, Navbar } from '../components'
import {
  About,
  Projects,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections'

const Page = () => (
  <div className='bg-night overflow-hidden'>
    <div className='h-screen'>
      <Navbar />
      <Hero />
    </div>
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Projects />
    </div>
    <div className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <WhatsNew />
    </div>
    <World />
    <div className='relative'>
      <Insights />
      <div className='gradient-04 z-0' />
      <Feedback />
    </div>
    <Footer />
  </div>
)

export default Page
