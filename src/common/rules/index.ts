import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from "yup";

// This line to warning error text in code rule
type Rules = { [key in 'email' | 'password' | 'password_confirmation']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 kí tự'
    },
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 kí tự'
    },
  },
  password_confirmation: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 kí tự'
    },
    validate: typeof getValues == 'function' ? value => value === getValues().password || 'Nhập lại password không hợp lệ' : undefined
  }
})

export const schema = yup.object({
  email: yup.string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  password: yup.string()
    .required('Password là bắt buộc')
    .min(3, 'must be at least 3 characters long')
    .min(6, 'Độ dài từ 6-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự'),
  password_confirmation: yup.string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6-160 kí tự')
    .max(160, 'Độ dài từ 5-160 kí tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không hợp lệ ')
}).required();

export type Schema = yup.InferType<typeof schema>
