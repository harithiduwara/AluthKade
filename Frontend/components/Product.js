import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Currency from 'react-currency-format'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice' 

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ key, id, title, price, description, category, image }) {

  const dispatch = useDispatch();

  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      key,
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    };
    // Sending the product as an action to the REDUX store..  the basker slice
    dispatch(addToBasket(product));
  }

  return (
    <div className='relative flex flex-col bg-white p-10 z-30 my-5 mx-5 rounded-md'>
      
      <p className='absolute top-2 right-2 text-gray-400 italic text-sm'>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain"/>

      <h1 className='my-3'>{title}</h1>

      <div className='flex'>
      
        {Array(rating).fill().map((_, i) => (
          <StarIcon className='h-5 text-yellow-500' />
        ))}

      </div>

      <p className='text-xs my-2 line-clamp-3'>{description}</p>

      <div className='mb-5'>
        <Currency value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>

      {hasPrime && 
        <div className='flex items-center space-x-2 -mt-5'>
          <img src='https://links.papareact.com/fdw' alt='' className='w-12'/>
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      }

      <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>

    </div>
  )
}

export default Product
