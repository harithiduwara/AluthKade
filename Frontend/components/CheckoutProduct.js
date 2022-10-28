import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-format'
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import { removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({
    key,
    id,
    title,
    price,
    rating,
    image,
    description,
    category,
    hasPrime
}) {

    const dispatch = useDispatch();

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
        // Push item into redux
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    }

    return (
        <div className='grid grid-cols-5 my-5'>

            <Image src={image} height={150} width={150} objectFit="contain"/>

            <div className='col-span-3 mx-5'>

                <h1 className='my-2'>{title}</h1>

                <div className='flex my-2'>
                    {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' />
                    ))}
                </div>

                <p className='text-sm line-clamp-3 my-2'>{description}</p>

                {hasPrime && <p className='text-yellow-600'>FREE Next-Day Delievery</p>}

                <Currency value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>

            <div className='flex flex-col space-y-2 my-auto'>
                <button onClick={addItemToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
