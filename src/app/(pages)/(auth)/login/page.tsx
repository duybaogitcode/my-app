'use client';
import Image from 'next/image';
import { Button, Checkbox, Input, Link } from '@nextui-org/react';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HelpIcon from '@mui/icons-material/Help';

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  console.log(isVisible);

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
            <p className='flex justify-center mt-10 text-white text-4xl font-semibold'>Đăng nhập</p>
            <form className='flex flex-col items-center mt-10 space-y-5 '>
              <Input
                isRequired
                type='email'
                label='Email'
                defaultValue='duybao@gmail.com'
                className='max-w-xs'
              />
              <Input
                label='Password'
                variant='bordered'
                placeholder='Enter your password'
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
              <Button color='danger'>Đăng nhập</Button>
              <aside className='flex justify-between w-[70%]'>
                <Checkbox color='default' defaultSelected>
                  Ghi nhớ
                </Checkbox>
                <HelpIcon></HelpIcon>
              </aside>
              <aside className='text-lg w-[70%]'>
                Bạn chưa có tài khoản?
                <Link className='text-lg ml-1'> Đăng ký ngay</Link>
              </aside>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
