import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'

import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'
import React from 'react'

const Hero = props => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'am Akhil.
        </SectionTitle>
        <SectionText>Full Stack Web Developer based on Trivandrum.</SectionText>
        <Button href="#contact">Contact me</Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
