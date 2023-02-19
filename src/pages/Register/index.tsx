import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className={`bg-orange`}>
      <div className={`max-w-7xl mx-auto px-4 py-10`}>
        <div className={`grid grid-cols-2 lg:grid-cols-5 gap-1`}>
          <div className={'lg:col-start-1 lg:col-end-4'}>
            <img className={'text-center m-auto'} src='../../src/assets/image/logo-register.png' alt=''/>
            <div className={'text-white text-xl text-center'}>Nền tảng thương mại điện tử <br/> được yêu thích ở Đông Nam Á & Đài Loan</div>
          </div>
          <form className={'p-5 bg-white rounded lg:col-start-4 col-span-2 shadow-sm'}>
            <div className={`text-2xl text-[#222]`}>Đăng ký</div>
            <div className={'mt-8'}>
              <input type='email' name="email" placeholder="Enter your email"
                     className={'p-3 w-full rounded border border-gray-300 focus:border-gray-500 focus:outline-none focus:shadow-sm'}/>
              <div className={'text-red-600 mt-[2px] text-sm min-h-[1rem]'}></div>
            </div>
            <div className={'mt-3'}>
              <input type='password' name="password" placeholder="Enter your password"
                     className={'p-3 w-full rounded border border-gray-300 focus:border-gray-500 focus:outline-none focus:shadow-sm'}/>
              <div className={'text-red-600 mt-[2px] text-sm min-h-[1rem]'}></div>
            </div>
            <div className={'mt-3'}>
              <input type='password' name="password_confirmation" placeholder="Enter your password confirmation"
                     className={'p-3 w-full rounded border border-gray-300 focus:border-gray-500 focus:outline-none focus:shadow-sm'}/>
              <div className={'text-red-600 mt-[2px] text-sm min-h-[1rem]'}></div>
            </div>
            <div className={'mt-3'}>
              <button className={'w-full bg-orange uppercase text-white hover:opacity-70 py-3'} type={'button'}>Đăng ký</button>
            </div>
            <div className={`mt-8 flex items-center justify-center`}>
              <div className={'text-[#00000042]'}>Bạn đã có tài khoản?</div>
              <Link to='/login' className={'ml-1 text-orange'}>Đăng nhập</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
