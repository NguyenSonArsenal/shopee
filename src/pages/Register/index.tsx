import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { getRules } from '../../common/rules'
import MyInput from '../../components/MyInput'

interface FormRegister {
  email: string,
  password: string,
  password_confirmation: string
}

export default function Register() {
  // errors: Xuất hiện khi component re-render => xử lý submit form lỗi validate
  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm<FormRegister>()
  const rules = getRules(getValues);

  const handleSubmitRegister = handleSubmit((data) => {
  });


  return (
    <div className={`bg-orange`}>
      <div className={`container`}>
        <div className={`grid grid-cols-2 lg:grid-cols-5 gap-1 py-10`}>
          <div className={'lg:col-start-1 lg:col-end-4'}>
            <img className={'text-center m-auto'} src='../../src/assets/image/logo-register.png' alt=''/>
            <div className={'text-white text-xl text-center'}>Nền tảng thương mại điện tử <br/> được yêu thích ở Đông Nam Á & Đài Loan</div>
          </div>
          <form className={'p-5 bg-white rounded lg:col-start-4 col-span-2 shadow-sm'} noValidate onSubmit={handleSubmitRegister}>
            <div className={`text-2xl text-[#222]`}>Đăng ký</div>

            <MyInput
              type={'email'}
              name={'email'}
              register={register}
              placeholder="Enter your email"
              className="mt-8"
              rules={rules.email}
              errors={errors.email?.message}
            />

            <MyInput
              type={'password'}
              name={'password'}
              register={register}
              placeholder="Enter your password"
              className="mt-3"
              rules={rules.password}
              errors={errors.password?.message}
              autoComplete='on'
            />

            <MyInput
              type={'password'}
              name={'password_confirmation'}
              register={register}
              placeholder="Enter your password confirmation"
              className="mt-3"
              rules={rules.password_confirmation}
              errors={errors.password_confirmation?.message}
              autoComplete='on'
            />

            <div className={'mt-3'}>
              <button className={'w-full bg-orange uppercase text-white hover:opacity-70 py-3'} type={'submit'}>Đăng ký</button>
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
