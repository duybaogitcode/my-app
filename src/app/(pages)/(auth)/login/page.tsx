'use client';
import Image from 'next/image';
import { Button, Checkbox, Input, Link, select } from '@nextui-org/react';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HelpIcon from '@mui/icons-material/Help';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);
  const [selected, setSelected] = useState('login');

  const toggleVisibility = () => setIsVisible(!isVisible);

  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  return (
    <div className='text-3xl h-screen'>
      <div className='h-full relative'>
        {/* Hình ảnh */}
        <Image
          src='https://images3.alphacoders.com/132/1322308.jpeg'
          layout='fill'
          objectFit='cover'
          alt='background'
        ></Image>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75'></div>
        <section className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full bg-black sm:w-[450px] sm:h-[80%] opacity-75'>
          <div className='mt-[40%] sm:mt-0'>
            <p className='flex justify-center mt-10 text-white text-4xl font-semibold'>
              {selected === 'login' ? 'Đăng nhập' : 'Đăng ký'}
            </p>
            <form className='flex flex-col items-center mt-10 space-y-5 '>
              <Input
                isRequired
                type='email'
                label='Email'
                defaultValue='duybao@gmail.com'
                className='max-w-xs'
              />
              <Input
                label='Mật khẩu'
                variant='bordered'
                placeholder='Tạo mật khẩu'
                endContent={
                  <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                    {isVisible ? (
                      <RemoveRedEyeIcon className='text-2xl text-default-400 pointer-events-none' />
                    ) : (
                      <VisibilityOffIcon className='text-2xl text-default-400 pointer-events-none' />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
                className='max-w-xs'
              />
              {selected === 'signup' && (
                <Input
                  label='Xác nhận mật khẩu'
                  variant='bordered'
                  placeholder='Xác nhận lại mật khẩu'
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={toggleVisibilityConfirm}
                    >
                      {isVisibleConfirm ? (
                        <RemoveRedEyeIcon className='text-2xl text-default-400 pointer-events-none' />
                      ) : (
                        <VisibilityOffIcon className='text-2xl text-default-400 pointer-events-none' />
                      )}
                    </button>
                  }
                  type={isVisibleConfirm ? 'text' : 'password'}
                  className='max-w-xs'
                />
              )}
              <Button color='danger'>{selected === 'login' ? 'Đăng nhập' : 'Đăng ký'}</Button>
              <aside className='flex justify-between w-[70%]'>
                <Checkbox color='default' defaultSelected>
                  Ghi nhớ
                </Checkbox>
                <HelpIcon></HelpIcon>
              </aside>
              <aside className='text-lg w-[70%]'>
                {selected === 'login' ? (
                  <>
                    Bạn chưa có tài khoản?
                    <Link className='text-lg ml-1' onClick={() => setSelected('signup')}>
                      {' '}
                      Đăng ký ngay
                    </Link>
                  </>
                ) : (
                  <>
                    {' '}
                    Đã có tài khoản?
                    <Link className='text-lg ml-1' onClick={() => setSelected('login')}>
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
