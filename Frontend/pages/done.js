
import Header from '../components/Header'
import Currency from 'react-currency-format'
import { useRouter } from 'next/router'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSelector } from 'react-redux'
import done from '../assets/done.png'

const Done = () => {

    const router = useRouter()


    return ( 
        <>
        <Header />
        <div className='px-32 py-44 flex justify-center'>
            {/* <img src={done}/> */}
            <div>
                Email Sent Successfully!
            </div>
        </div>
        </>
    );
}
 
export default Done;