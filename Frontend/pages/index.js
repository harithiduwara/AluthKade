import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head><title>Amazon</title></Head>
      <Header />

      <main className='max-w-screen-xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products}/>
      </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
 