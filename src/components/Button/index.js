import PropTypes from 'prop-types'
import React from 'react'

import { ButtonComponent } from './styles'

export function Button({ children, ...rest }) {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>
}

Button.propTypes = {
  children: PropTypes.string
}
