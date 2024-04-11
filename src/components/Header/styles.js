import styled from 'styled-components'

export const Container = styled.div`
  height: 65px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px 0px #00000026;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`

export const ContainerLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 135px;
`

export const PageLink = styled.a`
  font-size: 16px;
  font-weight: ${props => (props.isactive ? '700' : '400')};
  color: ${props => (props.isactive ? '#9758a6;' : '#555555;')};
  cursor: pointer;
`

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 15px;
`

export const UserNameAndLogoutLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
`
export const UserName = styled.p`
  display: flex;
  gap: 3px;
  font-size: 14px;
  font-weight: 700;
  color: #555555;

  p {
    font-weight: 300;
  }
`

export const LogoutLink = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #9758a6;
  cursor: pointer;
`
