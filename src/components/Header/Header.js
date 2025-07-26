import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons
} from './HeaderStyles'

import { DiCssdeck } from 'react-icons/di'
import Link from 'next/link'
import React from 'react'

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/blogs">
          <NavLink>Blogs</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/akhilbhadrangirija">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/akhil-b-g-598708189/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons> */}
    </Div3>
  </Container>
)

export default Header
