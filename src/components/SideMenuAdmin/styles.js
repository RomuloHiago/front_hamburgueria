import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px #00000026;
  min-width: 20vw;
  margin: 0;
  padding: 75px 15px 15px 15px;
  min-height: 100vh;

  hr {
    background: #e9ecef;
  }
`

export const LinksContainer = styled.div`
  padding: 5px 0;
`

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 20px;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  .icon {
    color: #9758a6;
  }

  .logout-icon {
    color: #ff0000;
  }
`
