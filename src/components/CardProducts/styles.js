import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 15px;
  width: 370px;
  height: 200px;
  padding: 15px;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0px 30px 60px 0px #3939391a;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
  }

  img {
    width: 170px;
    height: 170px;
    border-radius: 16px;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #000000;
  }

  p {
    margin-top: 50px;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    color: #000000;
  }
`
