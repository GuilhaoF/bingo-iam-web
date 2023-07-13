import Image from 'next/image'
import IamLogo from "../assets/iamlogo.png"
import { useRouter } from 'next/router'


export default function Home() {

  const route = useRouter()

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-red-600 to-yellow-400" >

    <Image className='' src={IamLogo} alt='logo' width={400} height={400}  quality={80}  />
     <button className=' p-4  shadow-xl w-44 mt-2 rounded-lg border-solid border-2' onClick={() => route.push('/bingo')}>
      Bingo IAM 2023
     </button>
  </div>
  )
}
