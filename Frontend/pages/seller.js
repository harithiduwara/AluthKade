import HeaderSeller from '../components/HeaderSeller'
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
import styles from '../styles/Home.module.css'
import Swal from 'sweetalert2'


const Seller = () => {

  const [item, setItem] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {amount, item }
    console.log(details)
    // makePaymentCC( amount, item) 

    
  }

  const handleClick  = () =>{
    Swal.fire({
        icon: 'success',
        title: 'Item Added'
      })
  }

    return ( 
        <div className='h-screen bg-gray-100'>
      <Head><title>Amazon</title></Head>
      <HeaderSeller />

      <div className='px-32 py-44 flex justify-center'>

            <form class="w-full max-w-sm flex flex-col"  onSubmit={handleSubmit}>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/2">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Item Name
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={(e) => setItem(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/2">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Amount
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={(e) => setAmount(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                    </div>
                </div>
                                
                <div class="md:flex md:items-center">
                    <div class="md:w-2/3">
                    <button onClick={handleClick} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Add Item
                    </button>
                    </div>
                </div>
            </form>
            
        </div>

    </div>
     );
}
 
export default Seller;