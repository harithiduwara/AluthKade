import React from 'react'
import Header from '../components/Header'
import Image from 'next/Image'
import Currency from 'react-currency-format'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/react'

function Checkout() {

  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const session = useSession()
  const router = useRouter()

  

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-xl mx-auto'>
        {/* Left Section */}

        <div className='flex-grow m-5 shadow-sm'>
          <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain"/>

          <div className='flex flex-col p-5 space-y-30 bg-white'>
            <h1 className='text-3xl border-b pb-4'>{items.length == 0 ? 'Your Shopping Basket is empty' : 'Your Shopping Basket'}</h1>

            {items.map((item, i) => (
              <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                description={item.description}
                category={item.category}
                hasPrime={item.hasPrime}
              />
            ))}

          </div>

        </div>

        {/* Right Section */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{" "}
                <span className='font-bold'><Currency value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
              </h2>

              <button onClick={() => router.push('/service')} disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>{!session ? "Sign in to checkout" : "Proceed to checkout"}</button>
            </>
          )}

        </div>

      </main>
    </div>
  )
}

export default Checkout 