import styled from 'styled-components'

export const ButtonComponent = styled.button`
  height: 35px;
  width: 50%;
  background: #9758a6;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #eeeeee;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
