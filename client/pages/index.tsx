import React, { useEffect } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://avocado-nextjs-production.up.railway.app/product/allProducts')
  const repo = await res.json()
  return { props: { repo } }
}

const HomePage = ({ repo }: { repo: TProduct[] }) => {

  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comprar en Avo Store hoy?</a>
        </Link>
      </section>
      <ProductList products={repo} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
