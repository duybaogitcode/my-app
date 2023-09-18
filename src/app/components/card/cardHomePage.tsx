'use client';

import { Card, CardFooter, Image, useDisclosure, Modal, Tooltip } from '@nextui-org/react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ModalEpisode from '../modal/modalEpisode';
import Link from 'next/link';

export interface Item {
  title: string;
  episodes: number;
  category: string[];
}

type Season = {
  id: string;
  title: string;
};

const CardHomePage = ({ item }: { item: Item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      // className='transform border-none rounded-lg hover:scale-125 hover:z-10'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: 'transparent' }}
    >
      <Image
        alt='Woman listing to music'
        src='https://firebasestorage.googleapis.com/v0/b/ecomm-1a83f.appspot.com/o/Test%2F1322308.jpeg?alt=media&token=838d8c7b-04b7-4ee1-8fc5-3d2e39f8cbfc '
        className='object-cover bg-black aspect-video'
      />
      {isHovered && (
        <CardFooter className='flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-center text-tiny sm:text-lg text-white/80'>
            Số tập - Độ tuổi - Độ trùng khớp
          </p>
          <div className='flex flex-row space-x-5'>
            <Link href={'/video'}>
              <div className='flex items-center justify-center w-5 h-5 text-white bg-white rounded-full hover:bg-slate-300 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
                {' '}
                <PlayArrowIcon className='text-lg text-black sm:text-xl lg:text-3xl'></PlayArrowIcon>
              </div>
            </Link>
            <div className='flex items-center justify-center w-5 h-5 text-white bg-black rounded-full shadow-xl hover:shadow-gray-50 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
              <Tooltip content='Notification' className='bg-black'>
                <NotificationsActiveIcon className='text-lg sm:text-xl lg:text-2xl'></NotificationsActiveIcon>
              </Tooltip>
            </div>
            <div className='flex items-center justify-center w-5 h-5 text-white bg-black rounded-full shadow-xl hover:shadow-gray-500 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
              <Tooltip content='Add to list' className='bg-black'>
                <AddIcon className='text-lg sm:text-xl lg:text-2xl'></AddIcon>
              </Tooltip>
            </div>
            <div className='flex items-center justify-center w-5 h-5 text-white bg-black rounded-full shadow-xl hover:shadow-gray-50 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
              <Tooltip content='Thông tin chi tiết' className='bg-black'>
                <ArrowDropDownIcon
                  className='text-lg sm:text-xl lg:text-2xl'
                  onClick={onOpen}
                ></ArrowDropDownIcon>
              </Tooltip>
            </div>
          </div>
        </CardFooter>
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        size='4xl'
        scrollBehavior='outside'
      >
        <ModalEpisode></ModalEpisode>
      </Modal>
    </Card>
  );
};

export default CardHomePage;

// interface Item {
//   title: string;
//   episodes: number;
//   category: string[];
// }

// interface CardProps {
//   item: Item;
// }

// const Card: React.FC<CardProps> = ({ item }) => {
//   return (
//     <div>
//       <h1>{item.title}</h1>
//       <p>Number of episodes: {item.episodes}</p>
//       <p>Category: {item.category.join(', ')}</p>
//     </div>
//   );
// };

// export default Card;
