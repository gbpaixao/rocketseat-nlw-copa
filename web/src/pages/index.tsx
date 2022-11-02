import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarsExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

interface HomeProps {
  count: number
}

export default function Home(props: HomeProps) {
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28'>
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        
        <div className='mt-10 flex items-center gap-2'>
          <Image src={usersAvatarsExampleImg} alt="" />

          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+12.592</span> pessoas já estão usando
          </strong>
        </div>
          
        <form className='mt-10 flex gap-2'>
          <input 
            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm'
            type="text" 
            required 
            placeholder='Qual o nome do seu bolão?' 
          />
          <button 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700" 
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
          </p>

        <div className='mt-10 pt-10 border-t border-gray-600 divide-x grid grid-cols-2 text-gray-100'>
          <div className='flex justify-start gap-6'>
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col '>
              <span className='font-bold text-2xl'>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className='flex justify-end gap-6'>
          <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col '>
              <span className='font-bold text-2xl'>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
        
      </main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" 
        quality={100}
      />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   console.log(data)
//   return {
//     props: {
//       count: data.count
//     }
//   }
// }