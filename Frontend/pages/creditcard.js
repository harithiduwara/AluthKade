
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { makePaymentMobile } from '../services/paymentService'
import Swal from 'sweetalert2'


const CC = () => {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    
    const [number, setNumber] = useState('')
    const [pin, setPin] = useState('')
    const [amount, setAmount] = useState(total)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const details = {number, pin, amount}
        console.log(details)
        // makePaymentCC( number, pin, amount) 
    
        
      }

      const handleClick  = () =>{
        Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            text: 'Email has been sent!'
          })
          .then((result) => {
            if (result.isConfirmed) {
                router.push('/')
            }
        })
      }

    return ( 

        <>
        <Header />
        <div className='px-32 py-44 flex justify-center'>

            <form class="w-full max-w-sm flex flex-col"  onSubmit={handleSubmit}>
                <div class=" md:items-center mb-6">
                    <div class="md:w-1/2">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Credit Card Number
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={(e) => setNumber(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                    </div>
                </div>
                <div class=" md:items-center mb-6">
                    <div class="md:w-1/2">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        CVC Number
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input onChange={(e) => setPin(e.target.value)} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"/>
                    </div>
                </div>
                <div class=" md:items-center mb-6">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Amount
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={total} readOnly/>
                    </div>
                </div>
                                
                <div class="md:flex md:items-center">
                    <div class="md:w-2/3">
                    <button onClick={handleClick} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Pay
                    </button>
                    </div>
                </div>
            </form>
            
        </div>
        </>
    );
}
 
export default CC;