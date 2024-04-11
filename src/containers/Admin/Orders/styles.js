import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  width: 80vw;
  padding-right: 20px;
`

export const ProductImg = styled.img`
  width: 60px;
  height: 50px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-tj5bde-Svg {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0 15px 0;
`

export const LinkMenu = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  color: #323d5d;
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #9758A6;' : 'none'};
  padding-bottom: 5px;
`

export const DeleteOrderButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`
