import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIconStyle } from './styles'

function ListProducts() {
  const [products, setProducts] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadProducts()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return (
        <CheckCircleTwoToneIcon
          style={{
            background: 'none',
            color: 'green'
          }}
        />
      )
    }
    return (
      <CancelTwoToneIcon
        style={{
          background: 'none',
          color: 'red'
        }}
      />
    )
  }

  function editProduct(product) {
    push(paths.EditProduct, { product })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell align="center">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatCurrency(product.price)}
                  </TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="imagem-do-produto" />
                  </TableCell>
                  <TableCell align="center">
                    <EditIconStyle onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
