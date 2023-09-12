'use client';

import { Card, CardBody, Image } from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

interface episodeFormat {
  isInModal: boolean;
  isInVideoDetail: boolean;
}

export default function Episode({ episodeProps }: { episodeProps: episodeFormat }) {
  return (
    <>
      {episodeProps.isInVideoDetail && (
        <Card className='mx-auto mt-4 w-[90%] shadow-lg hover:shadow-slate-50'>
          <div className='grid grid-rows-3 grid-flow-col gap-5'>
            <div className='flex row-span-3 items-center'>
              <Image
                alt='Woman listing to music'
                src='https://images3.alphacoders.com/132/1322308.jpeg'
                className='object-cover'
              />
            </div>

            <div className='col-span-4 text-xl'>Tập 1</div>
            <PlaylistPlayIcon className='col-span-4 text-3xl mx-auto'></PlaylistPlayIcon>
            <ArrowCircleDownIcon className='col-span-4 text-3xl mx-auto'>:</ArrowCircleDownIcon>
            {/* <div className='row-span-2 col-span-2 line-clamp-3 mt-3'>
        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
        adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
        eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur.
      </div> */}
          </div>
        </Card>
      )}
      {episodeProps.isInModal && (
        <Card className='mx-auto mt-4 w-[90%] shadow-lg hover:shadow-slate-50'>
          <div className='grid grid-rows-3 grid-flow-col gap-5'>
            <div className='flex row-span-3 items-center'>
              <Image
                alt='Woman listing to music'
                src='https://images3.alphacoders.com/132/1322308.jpeg'
                className='object-cover'
              />
            </div>

            <div className='col-span-2'>Tập $ - Thời lượng</div>

            <div className='row-span-2 col-span-2 line-clamp-3 mt-3'>
              Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
              adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur.
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
