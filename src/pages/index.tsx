import Image from 'next/image'

import JmLogo from "../assets/logo.png"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

  const route = useRouter()

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-yellow-500">
      <Image className='' src={JmLogo} alt='logo' width={200} height={200}  quality={80}  />
    <h1 className="text-white text-4xl">Caixa JM</h1>
     <button className=' p-4  shadow-xl w-44 mt-2 rounded-lg border-solid border-2' onClick={() => route.push('/dashboard')}>
      Acessar
     </button>
     <button className=' p-4  shadow-xl w-44 mt-2 rounded-lg border-solid border-2' onClick={() => route.push('/bingo')}>
      Bingo IAM 2023
     </button>
  </div>
  )
}
