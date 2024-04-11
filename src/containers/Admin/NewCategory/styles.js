import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  min-height: 100vh;
  width: 80vw;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: #565656;
    padding: 25px;
    border-radius: 10px;
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

export const ButtonStyle = styled(Button)`
  width: 100%;
  margin-top: 50px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px dashed #ffffff;
  border-radius: 10px;
  padding: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`
