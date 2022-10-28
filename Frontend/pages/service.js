import { useRouter } from 'next/router'
import Header from '../components/Header'

const Service = () => {
    const router = useRouter()

    return ( 
        <>
        <Header />
        <div className='px-32 py-44 flex justify-center'>
                    <div class="w-1/3 flex flex-col">
                        
                        <center><div className='text-2xl mb-8'>Choose a Delivery Service</div></center>
                        <button onClick={() => router.push('/pay')} class="mb-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Uber
                        </button>
                        <button onClick={() => router.push('/pay')} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Pick Me
                        </button>
                    </div>
        </div> 
        </>           
    );
}
 
export default Service;