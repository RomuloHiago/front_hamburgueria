import styled from 'styled-components'

import Background from '../../assets/backgorund-image.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  justify-content: center;
  align-items: center;
  display: flex;
`

export const LoginImage = styled.img`
  height: 90%;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 90%;
  width: 32%;
  padding: 30px 75px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    margin-top: 70px;
  }
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: ${props => (props.onError ? '2px solid #CC1717;' : 'none')};
  padding-left: 5px;
`

export const SignUpLink = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
