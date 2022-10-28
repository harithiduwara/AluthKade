import React from 'react'
import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {

  const { data: session } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)

  return (
    
    <header>
      {/* top nav bar */}
      <div className='flex items-center bg-black p-1 py-2 flex-grow'>

        {/* logo */}
          <div className='mt-2 flex flex-grow items-center sm:flex-grow-0'>
              <Image onClick={() => router.push('/')} src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className='cursor-pointer'/>
          </div>

          {/* search */}
          <div className='hidden sm:flex bg-yellow-500 h-10 cursor-pointer hover:bg-yellow-400 items-center rounded-md flex-grow'>
            <input type="text" className='p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4'/>
            <SearchIcon className='h-12 p-4'/>
          </div>

          {/* left */}
          <div className='text-white flex text-xs items-center space-x-6 mx-6 whitespace-nowrap'>
            <div onClick={!session ? signIn : signOut} className='link'>
              <p className='hover:underline'>
                {session ? `Hello, ${session.user.name}` : 'Sign In'}
              </p>
              <p className='font-semibold md:font-bold'>Account & Lists</p>
            </div>

            <div className='link'>
              <p>Returns</p>
              <p className='font-bold'>& Orders</p>
            </div>

            {/* <div className='link relative flex items-center' onClick={() => router.push('/checkout')}>
              <span className='absolute right-0 top-0 md:right-10 bg-yellow-400 rounded-full font-bold text-black h-4 w-4 text-center'>{items.length}</span>
              <ShoppingCartIcon className='h-10'/>
              <p className='hidden font-bold md:inline'>Basket</p>
            </div> */}
          </div>

      </div>

      {/* bottom nav bar */}
      <div className='flex items-center space-x-5 text-sm text-white bg-black p-2'>
        <p className='flex items-center link pl-2'>
          <MenuIcon className='h-4'/>
          All
        </p>
        <p className='link inline-flex'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline'>Food & Grocery</p>
        <p className='link hidden lg:inline'>Prime</p>
        <p className='link hidden lg:inline'>Buy Again</p>
        <p className='link hidden lg:inline'>Shopper Toolkit</p>
        <p className='link hidden lg:inline'>Health & Personal Care</p>
      </div>

    </header>

    
  )
}

export default Header