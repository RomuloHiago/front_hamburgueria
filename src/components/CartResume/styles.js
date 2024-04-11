import styled from 'styled-components'

import { Button } from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 80px;
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;

  .itemsFromCart {
    display: grid;
    grid-gap: 10px 100px;
    grid-template-areas:
      'orderResume orderResume'
      'items itemsSum'
      'deliveryTax deliveryTaxValue';
    .orderResume {
      font-size: 14px;
      font-weight: 500;
      color: #222222;
      grid-area: orderResume;
    }
    .items {
      grid-area: items;
    }
    .itemsSum {
      grid-area: itemsSum;
    }
    .deliveryTax {
      grid-area: deliveryTax;
    }
    .deliveryTaxValue {
      grid-area: deliveryTaxValue;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    p {
      font-size: 24px;
      font-weight: 400;
      color: #000000;
    }
  }

  p {
    font-size: 14px;
    font-weight: 300;
    color: #222222;
  }
`

export const OrderButton = styled(Button)`
  background-color: ${props => (!props.disabled ? '#9758a6;' : '#555555;')};
  color: ${props => (!props.disabled ? '#ffffff;' : '#000000;')};
`
