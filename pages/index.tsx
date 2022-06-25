import React from 'react';
import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '../frameworks/shopify/getAllProducts';

export async function getStaticProps() {

  const products = await getAllProducts();

  return {
    props: {

        products

    },
    revalidate: 4* 60 * 60


  }
}


export default function Home( {products} : InferGetStaticPropsType <typeof getStaticProps> ){

  console.log(products);


  return (
    <div>

        <h2>
          {products.map(product => <p>{product.title}</p>)}
        </h2>
          

    </div>
  )
}