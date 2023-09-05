'use client';

import { Card, CardFooter, Image, Button, Link } from '@nextui-org/react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface Item {
  title: string;
  episodes: number;
  category: string[];
}

const CardComponent = ({ item }: { item: Item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className='border-none rounded-lg transform hover:scale-125 hover:z-10'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        alt='Woman listing to music'
        src='https://images3.alphacoders.com/132/1322308.jpeg'
        className='object-cover'
      />
      {isHovered && (
        <CardFooter className='flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny sm:text-lg text-center text-white/80'>
            Số tập - Độ tuổi - Độ trùng khớp
          </p>
          <div className='space-x-5 flex-row flex'>
            <div className='flex justify-center items-center text-white w-5 h-5 bg-white rounded-full  hover:bg-slate-300 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
              {' '}
              <PlayArrowIcon className='text-black text-lg sm:text-xl lg:text-3xl'></PlayArrowIcon>
            </div>
            <div className='flex justify-center items-center text-white w-5 h-5 bg-black rounded-full shadow-xl hover:shadow-gray-50 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
              <NotificationsActiveIcon className='text-lg sm:text-xl lg:text-2xl'></NotificationsActiveIcon>
            </div>
            <div className='flex justify-center items-center text-white w-5 h-5 bg-black rounded-full shadow-xl hover:shadow-gray-500 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
              <AddIcon className='text-lg sm:text-xl lg:text-2xl'></AddIcon>
            </div>
            <div
              onClick={() => console.log('test nut drop')}
              className='flex justify-center items-center text-white w-5 h-5 bg-black rounded-full shadow-xl hover:shadow-gray-50 sm:w-7 sm:h-7 lg:w-10 lg:h-10'
            >
              <ArrowDropDownIcon className='text-lg sm:text-xl lg:text-2xl'></ArrowDropDownIcon>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardComponent;

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
