import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import { Layout } from '../layout/Layout'
import Projects from '../components/Projects/Projects'
import { Section } from '../styles/GlobalComponents'
import Technologies from '../components/Technologies/Technologies'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  )
}

export default Home
