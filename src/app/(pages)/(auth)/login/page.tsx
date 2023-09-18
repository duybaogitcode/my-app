'use client';

import { Button, Checkbox, Input, Link } from '@nextui-org/react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HelpIcon from '@mui/icons-material/Help';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import useUILoginState from '@/app/hooks/useUiLogin';

export default function Login() {
  const { state, toggleVisibility, toggleVisibilityConfirm, handleSelected } = useUILoginState();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không đúng định dạng'),
      password: Yup.string().matches(
        /^(?=.*[A-Z]).{6,}$/,
        'Mật khẩu ít nhất 6 kí tự và 1 kí tự in hoa'
      ),
      confirmPassword: state.validateConfirmPassword
        ? Yup.string().oneOf([Yup.ref('password')], 'Mật khẩu không trùng')
        : Yup.string(),
    }),
    onSubmit: (values) => {
      window.alert('Form submited!!!');
      console.log(values);
    },
  });

  return (
    <div className='h-screen '>
      <div className='relative h-full'>
        {/* Hình ảnh */}
        <Image
          alt='background'
          src='https://images3.alphacoders.com/132/1322308.jpeg'
          className='object-cover w-full h-full'
          layout='fill'
        ></Image>
        <div className='absolute top-0 left-0 w-full h-full opacity-75 bg-gradient-to-b from-transparent to-black'></div>
        <section className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full bg-black sm:w-[450px] sm:h-[80%] opacity-75'>
          <div className='mt-[40%] sm:mt-32'>
            <p className='flex justify-center mt-10 text-4xl font-semibold text-white'>
              {state.selected === 'login' ? 'Đăng nhập' : 'Đăng ký'}
            </p>
            <form
              className='flex flex-col items-center mt-10 space-y-5 '
              onSubmit={formik.handleSubmit}
            >
              <Input
                type='email'
                isRequired
                label='Email'
                id='email'
                name='email'
                placeholder='Email'
                value={formik.values.email}
                color={formik.errors.email ? 'danger' : 'default'}
                errorMessage={formik.errors.email && `${formik.errors.email}`}
                onChange={formik.handleChange}
                className='max-w-xs dark'
              />

              <Input
                label={'Mật khẩu'}
                id='password'
                isRequired
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                variant='bordered'
                placeholder='Mật khẩu'
                endContent={
                  <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                    {state.isVisible ? (
                      <RemoveRedEyeIcon className='text-2xl pointer-events-none text-default-400' />
                    ) : (
                      <VisibilityOffIcon className='text-2xl pointer-events-none text-default-400' />
                    )}
                  </button>
                }
                type={state.isVisible ? 'text' : 'password'}
                color={formik.errors.password ? 'danger' : 'default'}
                errorMessage={formik.errors.password && `${formik.errors.password}`}
                className='max-w-xs'
              />

              {state.selected === 'signup' && (
                <Input
                  label={'Xác nhận mật khẩu'}
                  variant='bordered'
                  id='confirmPassword'
                  isRequired
                  name='confirmPassword'
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder='Xác nhận lại mật khẩu'
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={toggleVisibilityConfirm}
                    >
                      {state.isVisibleConfirm ? (
                        <RemoveRedEyeIcon className='text-2xl pointer-events-none text-default-400' />
                      ) : (
                        <VisibilityOffIcon className='text-2xl pointer-events-none text-default-400' />
                      )}
                    </button>
                  }
                  type={state.isVisibleConfirm ? 'text' : 'password'}
                  color={formik.errors.confirmPassword ? 'danger' : 'default'}
                  errorMessage={formik.errors.confirmPassword && `${formik.errors.confirmPassword}`}
                  className='max-w-xs'
                />
              )}
              <Button type='submit' color='danger'>
                {state.selected === 'login' ? 'Đăng nhập' : 'Đăng ký'}
              </Button>
              <aside className='flex justify-between w-[70%]'>
                <Checkbox color='default' defaultSelected>
                  <p className='text-white'>Ghi nhớ</p>
                </Checkbox>
                <HelpIcon></HelpIcon>
              </aside>
              <aside className='text-lg w-[70%]'>
                {state.selected === 'login' ? (
                  <>
                    Bạn chưa có tài khoản?
                    <Link className='ml-1 text-lg' onClick={handleSelected}>
                      {' '}
                      Đăng ký ngay
                    </Link>
                  </>
                ) : (
                  <>
                    {' '}
                    Đã có tài khoản?
                    <Link className='ml-1 text-lg' onClick={handleSelected}>
                      {' '}
                      Đăng nhập ngay
                    </Link>
                  </>
                )}
              </aside>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
