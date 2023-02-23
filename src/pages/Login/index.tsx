import { Link } from 'react-router-dom'
import MyInput from '../../components/MyInput'
import { useForm } from 'react-hook-form'
import { getRules } from '../../common/rules'

interface FormLogin {
  email: string,
  password: string
}

export default function Login() {
  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm<FormLogin>()
  const rules = getRules(getValues);

  return (
    <div className={`bg-orange`}>
      <div className={`container`}>
        <div className={`grid grid-cols-2 lg:grid-cols-5 gap-1 py-10`}>
          <div className={'lg:col-start-1 lg:col-end-4'}>
            <img className={'text-center m-auto'} src='../../src/assets/image/logo-register.png' alt=''/>
            <div className={'text-white text-xl text-center'}>Nền tảng thương mại điện tử <br/> được yêu thích ở Đông Nam Á & Đài Loan</div>
          </div>
          <form className={'p-5 bg-white rounded lg:col-start-4 col-span-2 shadow-sm'}>
            <div className={`text-2xl text-[#222]`}>Đăng nhập</div>

            <MyInput
              type="email"
              name="email"
              placeholder="Enter your email"
              register={register}
              className={'mt-8'}
              rules={rules.email}
              errors={errors.email?.message}
            />

            <MyInput
              type="password"
              name="password"
              placeholder="Enter your password"
              register={register}
              className={'mt-3'}
              rules={rules.password}
              errors={errors.password?.message}
            />

            <div className={'mt-3'}>
              <button className={'w-full bg-orange uppercase text-white hover:opacity-70 py-3'} type={'button'}>Đăng nhập</button>
            </div>

            <div className={`mt-8 flex items-center justify-center`}>
              <div className={'text-[#00000042]'}>Bạn mới biết đến Shopee?</div>
              <Link to='/register' className={'ml-1 text-orange'}>Đăng ký</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
