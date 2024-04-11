import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </React.StrictMode>
)

// yarn add eslint -D/
// yarn eslint --init
// yarn add eslint-plugin-import-helpers -D
// yarn add eslint-plugin-react-hooks -D
// yarn add prettier  eslint-config-prettier eslint-plugin-prettier -D
// yarn add styled-components
// yarn add react-hook-form
// yarn add @hookform/resolvers yup
// yarn add axios
// yarn add prop-types
// yarn add react-toastify
// yarn add react-router-dom@5
// yarn add react-elastic-carousel
// yarn add react-select
// yarn add @mui/material @emotion/react @emotion/styled
// yarn add @mui/material @mui/styled-engine-sc styled-components
// yarn add @mui/x-data-grid
// yarn add @mui/material
// yarn add @mui/icons-material
//
//
//
//
