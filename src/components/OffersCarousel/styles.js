import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    background-color: #bebebf;
    border: none;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`

export const OffersImg = styled.img`
  background: none;
`

export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #424242;
    margin-top: 3px;
  }
`

export const OfferCarouselImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #9758a6;
  box-shadow: 0px 20px 40px 0px #9758a63d;

  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
