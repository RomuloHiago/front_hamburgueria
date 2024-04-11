import React from 'react'
import { useHistory } from 'react-router-dom'

import CartIcon from '../../assets/cart-icon-header.svg'
import ProfileIcon from '../../assets/profile-icon.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLinks,
  ContainerIcons,
  UserNameAndLogoutLink,
  LogoutLink,
  PageLink,
  UserName
} from './styles'

export function Header() {
  const { logout, userData } = useUser()

  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <ContainerLinks>
        <PageLink onClick={() => push('/')} isactive={pathname === '/'}>
          Página inicial
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isactive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLinks>
      <ContainerIcons>
        <img
          src={CartIcon}
          alt="Shopping-cart-image"
          style={{ cursor: 'pointer' }}
          onClick={() => push('/carrinho')}
        />
        <div style={{ height: '35px', border: '0.5px solid #bababa' }}></div>
        <img src={ProfileIcon} alt="Shopping-cart-image" />

        {userData?.name && (
          <UserNameAndLogoutLink>
            <UserName>
              <p>Olá</p> {userData.name}
            </UserName>
            <LogoutLink onClick={() => logoutUser()}>Sair</LogoutLink>
          </UserNameAndLogoutLink>
        )}
      </ContainerIcons>
    </Container>
  )
}
