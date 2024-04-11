import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 75vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`

export const Label = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 10px;
`

export const Input = styled.input`
  padding-left: 10px;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 14px 0px #0000001a;
`

export const ButtonStyles = styled(Button)`
  width: 100%;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const OfferContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
