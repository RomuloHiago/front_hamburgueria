import React from 'react'

import HomeImage from '../../assets/home-image-2.svg'
import { CategoryCarousel } from '../../components/CategoryCarousel'
import { OffersCarousel } from '../../components/OffersCarousel'
import { HomeImg, Container } from './styles'

export function Home() {
  return (
    <>
      <Container>
        <HomeImg src={HomeImage} alt="hamburger-image" />

        <CategoryCarousel />
        <OffersCarousel />
      </Container>
    </>
  )
}

export default Home
