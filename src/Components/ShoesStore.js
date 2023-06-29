import React, { Component } from 'react'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  render() {
    return (
      <div>
        <ProductList data={data}/>
      </div>
    )
  }
}
