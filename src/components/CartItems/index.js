import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct } = useCart([])

  return (
    <Container>
      <Header>
        <p></p>
        <p>Item</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>

            <p>
              <div className={'quantityContainer'}>
                <button onClick={() => decreaseProduct(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseProduct(product.id)}>+</button>
              </div>
            </p>
            <p>{formatCurrency(product.price * product.quantity)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>
          <RemoveShoppingCartIcon
            style={{ fontSize: '2.5rem', color: '#9758a6' }}
          />{' '}
          <div>
            <h1>O carrinho está vazio!!!</h1>
            <p>Adicione produtos para finalizar sua compra.</p>
          </div>
        </EmptyCart>
      )}
    </Container>
  )
}
