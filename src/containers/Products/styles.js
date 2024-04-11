import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  min-height: calc(100vh - 65px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoryButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  color: ${props => (props.isactivecategory ? '#9758A6' : '#9a9a9d')};
  border-bottom: ${props => props.isactivecategory && '3px solid #9758A6'};
  padding-bottom: 2px;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 15px;
`

export const ProductsContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  justify-items: center;
`
