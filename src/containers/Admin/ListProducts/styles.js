import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #efefef;
  min-height: 100vh;
  width: 75vw;
`

export const Img = styled.img`
  width: 70px;
  border-radius: 5px;
`

export const EditIconStyle = styled(EditOutlinedIcon)`
  color: blue;
  cursor: pointer;
`
