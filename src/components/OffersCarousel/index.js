import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import OffersImage from '../../assets/offers-logo-image.svg'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  OffersImg,
  Container,
  ContainerCarousel,
  OfferCarouselImg,
  Button
} from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  useEffect(() => {
    const loadOffers = async () => {
      const { data } = await api.get('products')
      const onlyOffers = data
        .filter(prod => prod.offer)
        .map(product => {
          return {
            ...product,
            formatedPrice: formatCurrency(product.price)
          }
        })

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
    // { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OffersImg src={OffersImage} alt="hamburger-image" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerCarousel key={product.id}>
              <OfferCarouselImg src={product.url} />
              <p>{product.name}</p>
              <p style={{ color: '#212121' }}>{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerCarousel>
          ))}
      </Carousel>
    </Container>
  )
}
