import React from 'react'

import CartImage from '../../assets/home-image-3.svg'
import { CartItems, CartResume } from '../../components'
import { CartImg, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartImage} alt="two-hamburgers-image" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
