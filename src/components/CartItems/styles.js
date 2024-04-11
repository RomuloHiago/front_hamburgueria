import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  width: max-content;
  padding: 10px;
  border-radius: 20px;
`

export const CartImg = styled.img`
  width: 100%;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 17px;
    font-weight: 400;
    color: #9a9a9d;
  }
`

export const Body = styled.body`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr 1fr 1fr;
  grid-gap: 10px 20px;
  padding: 10px;
  margin-top: 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 15px;
  }

  p {
    font-size: 15px;
    font-weight: 500;
  }

  .quantityContainer {
    display: flex;
    gap: 15px;
    align-items: baseline;
    margin-left: 12px;

    button {
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
  padding: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 58px;
      color: #9a9a9d;
    }

    p {
      font-size: 20px;
      color: #b5b5b5;
    }
  }
`
