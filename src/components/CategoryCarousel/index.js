import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import CategoryImage from '../../assets/category-logo-image.svg'
import api from '../../services/api'
import {
  CategoryImg,
  Container,
  ContainerCarousel,
  CategoryCarouselImg,
  Button
} from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
    // {width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={CategoryImage} alt="hamburger-image" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerCarousel key={category.id}>
              <CategoryCarouselImg src={category.url} />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerCarousel>
          ))}
      </Carousel>
    </Container>
  )
}
