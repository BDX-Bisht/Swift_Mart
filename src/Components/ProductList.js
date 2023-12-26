import React from 'react'
import { useFilterContext } from '../Context/filterContext'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {

  const { filter_products, grid_view } = useFilterContext()

  return (
    grid_view === true ?
      <GridView products={filter_products} /> :
      <ListView products={filter_products} />
  )
}

export default ProductList