import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'
import { useCart } from '../../hooks/CartContext'
import { Container } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  return (
    <Container>
      <img src={product.url} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.formatedPrice}</p>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
          style={{ width: '100%' }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
