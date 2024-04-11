import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, OrderButton } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cartProducts } = useCart([])

  useEffect(() => {
    const itemsSum = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(itemsSum)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return {
        id: product.id,
        quantity: product.quantity
      }
    })
    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido realizado!',
      error: 'Falha ao realizar pedido. Tente novamente.'
    })

    localStorage.removeItem('codeburger:cartInfo')
  }

  return (
    <div>
      <Container>
        <div className={'itemsFromCart'}>
          <h2 className={'orderResume'}>Resumo do pedido</h2>
          <p className={'items'}>Itens</p>
          <p className={'itemsSum'}>{formatCurrency(finalPrice)}</p>
          <p className={'deliveryTax'}>Taxa de entrega</p>
          <p className={'deliveryTaxValue'}>{formatCurrency(deliveryTax)}</p>
        </div>
        <div className={'total'}>
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <OrderButton
        disabled={cartProducts.length === 0}
        onClick={() => submitOrder()}
        style={{ width: '100%', marginTop: '20px' }}
      >
        Finalizar pedido
      </OrderButton>
    </div>
  )
}
