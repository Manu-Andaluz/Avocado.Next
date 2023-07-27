import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products?.map(({ name, id, price, image_url }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        header={name}
        image={{ children: <Image src={image_url} width={522} height={603} alt='avocado-image'/> }}
        meta={{
          children: <Card.Meta className='price' style={{ color: 'black',fontSize: 20 }}>${price}</Card.Meta>,
        }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={3} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
