import { Card } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export interface Episode {
  isInModal: boolean;
  isInVideoDetail: boolean;
}

export default function CardEpisode({ key, episodeProps }: { key: number; episodeProps: Episode }) {
  return (
    <Card className='sm:w-[90%] mx-auto'>
      <p className='mx-auto mb-3 text-xl sm:hidden'>Tập $ - thời lượng</p>
      <div className='grid grid-flow-col grid-rows-3 gap-4'>
        <div className='row-span-3'>
          <Image
            alt='Woman listing to music'
            src='https://images3.alphacoders.com/132/1322308.jpeg'
            className='object-cover w-full h-full rounded-2xl aspect-video'
            height={200}
            width={200}
          ></Image>
        </div>
        <p className='hidden col-span-2 sm:flex'>Tập - thời lượng</p>
        <p className='hidden col-span-2 row-span-2 mt-2 line-clamp-3 sm:flex'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, accusamus corporis! Culpa
          laborum soluta quibusdam ipsam, eaque enim, vitae eveniet quaerat sint, expedita minus
          assumenda tempore ducimus quod ipsum. Quibusdam.
        </p>
      </div>
    </Card>
  );
}
