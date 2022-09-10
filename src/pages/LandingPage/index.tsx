import { Link } from "react-router-dom"
import Session from "../../store/SesstionStore"
import Rank from "./components/Rank"

const LandingPage = () => {

  const { accessToken, role } = Session()

  return (
    <div className='w-full h-full flex items-center justify-center flex-col space-y-12'>
        <Link
          to={ accessToken && role ? '/symulator' : '/rejestracja' }
          className='rounded-md bg-primary text-2xl font-semibold drop-shadow-lg shadow shadow-black text-black text-center px-3 py-1 w-[20vw]'
        >
          Graj
        </Link>
        <Rank />
    </div>
  )
}

export default LandingPage