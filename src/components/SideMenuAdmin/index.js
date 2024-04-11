import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, LinksContainer, ItemLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <LinksContainer key={item.id}>
          <ItemLink to={item.link} isActive={path === item.link}>
            <item.icon className="icon" />
            {item.label}
          </ItemLink>
        </LinksContainer>
      ))}
      <hr></hr>
      <LinksContainer className="logout-container">
        <ItemLink
          to="/login"
          onClick={logout}
          style={{ position: 'fixed', bottom: '20px' }}
        >
          <LogoutOutlinedIcon className="logout-icon" />
          Sair
        </ItemLink>
      </LinksContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
