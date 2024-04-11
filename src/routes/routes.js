import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart } from '../containers'
import { Admin } from '../containers/Admin'
import PrivateRoutes from './private-routes'

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Login} path="/login" />
      <Route component={Register} path="/cadastro" />
      <PrivateRoutes exact component={Home} path="/" />
      <PrivateRoutes component={Products} path="/produtos" />
      <PrivateRoutes component={Cart} path="/carrinho" />

      <PrivateRoutes isAdmin component={Admin} path={paths.Order} />
      <PrivateRoutes isAdmin component={Admin} path={paths.Products} />
      <PrivateRoutes isAdmin component={Admin} path={paths.NewProduct} />
      <PrivateRoutes isAdmin component={Admin} path={paths.EditProduct} />
      <PrivateRoutes isAdmin component={Admin} path={paths.NewCategory} />
    </Switch>
  </Router>
)

export default Routes
