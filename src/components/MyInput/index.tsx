import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputInterface {
  type: React.HTMLInputTypeAttribute,
  name: string,
  register: UseFormRegister<any>,
  className?: string,
  placeholder?: string,
  errors?: string,
  autoComplete?: string,
  rules?: RegisterOptions,
}

export default function MyInput({type, name, register, className, placeholder, errors, autoComplete, rules}: InputInterface) {
  return (
    <div>
      <div className={className}>
        <input type={type} placeholder={placeholder} {...register(name, rules)} autoComplete={autoComplete}
               className={'p-3 w-full rounded border border-gray-300 focus:border-gray-500 focus:outline-none focus:shadow-sm'}/>
        <div className={'text-red-600 mt-[2px] text-sm min-h-[1rem]'}>{errors}</div>
      </div>
    </div>
  )
}
