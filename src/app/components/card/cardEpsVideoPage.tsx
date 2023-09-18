import React from 'react';
import { Card } from '@nextui-org/react';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Image from 'next/image';

export default function CardEpsVideoPage() {
  return (
    <Card className='mx-auto mt-4 w-[90%] shadow-lg hover:shadow-slate-50'>
      <div className='flex justify-around'>
        <div className='w-[83%]'>
          <Image
            alt='Woman listing to music'
            src='https://firebasestorage.googleapis.com/v0/b/ecomm-1a83f.appspot.com/o/Test%2F111029916_p0.png?alt=media&token=f8026f30-5d99-4787-a7e2-dd7a050e3fea'
            className='object-cover w-full h-full aspect-video'
            width={700}
            height={700}
          />
        </div>

        <section className='w-[17%] flex flex-col justify-between'>
          <div className='mx-auto text-lg md:text-xl xl:text-3xl'>1</div>
          <PlaylistPlayIcon className='mx-auto text-xl md:text-3xl'></PlaylistPlayIcon>
          <ArrowCircleDownIcon className='mx-auto text-xl md:text-3xl'>:</ArrowCircleDownIcon>
        </section>
      </div>
    </Card>
  );
}
