import React, { useEffect } from 'react'
import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => {
  useEffect(() => {
    console.log(product)
  }, [])

  return (
    <>
      <Item.Group as="section">
        <Item style={{ alignItems: 'center' }}>
          <Item.Image size="medium">
            <img src={product.image_url} alt={product.name} />
          </Item.Image>
          <Item.Content>
            <Item.Header as="h1">{product.name}</Item.Header>
            <Item.Description>
              <p>${product.price}</p>
            </Item.Description>
            <Item.Extra>
              <AddToCart product={product} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  )
}

export default ProductSummary
