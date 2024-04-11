import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsImage from '../../assets/home-image-1.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  ProductsImg,
  Container,
  CategoryButton,
  CategoryMenu,
  ProductsContainer
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }
    loadCategories()

    const loadProducts = async () => {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return {
          ...product,
          formatedPrice: formatCurrency(product.price)
        }
      })

      setProducts(newProducts)
    }
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsImage} alt="hamburger-image" />

      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              key={category.id}
              isactivecategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>

      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
