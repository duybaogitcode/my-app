'use client';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@nextui-org/react';
export default function Page() {
  return (
    <div>
      <div className='hidden sm:h-screen sm:flex justify-center'>
        <Image
          src='https://images3.alphacoders.com/132/1322308.jpeg'
          layout='fill'
          objectFit='cover'
          alt='background'
        ></Image>
        <div className='absolute left-36 top-3/4 space-y-4'>
          <h1 className='font-bold text-5xl'>Đây là tiêu đề</h1>
          <Button className='bg-white w-32 h-14 hover:bg-slate-300'>
            {' '}
            <PlayArrowIcon style={{ color: 'black' }} sx={{ fontSize: 50 }}></PlayArrowIcon>
          </Button>
          <Button className='bg-slate-400 w-44 h-14 hover:bg-slate-300 mx-2 '>
            {' '}
            <InfoIcon sx={{ fontSize: 50 }}></InfoIcon>{' '}
            <span className='font-bold'>Thông tin khác</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
