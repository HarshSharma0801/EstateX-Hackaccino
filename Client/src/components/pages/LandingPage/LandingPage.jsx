import '../../../index.css'
import logo from '../../../assets/icon.svg'
import {useNavigate} from 'react-router-dom'

function LandingPage(props) {
const navigate = useNavigate();
const clicked =()=>{
  console.log(props.account);
  props.clicked();

 }

  return (
    <>
      <div className='bg-main-bg bg-cover bg-bottom bg-no-repeat bg-zinc-900 h-screen'>
        <div className='flex justify-between w-full p-10'>
          <img src={logo} alt="" className='w-12'/>
          <div className='flex fo text-white gap-9 items-center'>
            <a className='hover:underline'>Contact Us</a>
            <a className='hover:underline'>How it works?</a>
            <a className='hover:underline'>About Us</a>
            <a className='hover:underline'>Regsiter</a>
            <a className='hover:underline'>Buy Property</a>
            <a className='hover:underline'>Sell Property</a>
          </div>
          <button onClick={()=> navigate('/Login')} className='text-white bg-gradient-to-b from-purple-500 to-purple-800 px-8 rounded-lg py-2'>
            Login
          </button>
        </div>
        <div className='flex items-center w-full justify-center mt-24'>
          <div className='flex flex-col items-center'>
            <img src={logo} alt="" className='w-40' />
            <h2 className='heading font-bold text-white text-7xl mt-4'>EstateX</h2>
            <button  onClick={clicked} className='text-white font-bold bg-gradient-to-b from-purple-500 to-purple-800 mt-10 text-lg px-20 rounded-lg py-4'>
              Connect to wallet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
