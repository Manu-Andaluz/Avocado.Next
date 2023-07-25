import React from 'react'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  const {data} = await axios.get<TProduct[]>('http://localhost:5000/product/allProducts')

  const paths = data?.map(({ id }) => ({ params: { id } }))
  
  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch(
    `http://localhost:5000/product/productById/${params?.id}`
  )
  const product = await response.json()
  // Pass post data to the page via props
  return { props: { product } }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
