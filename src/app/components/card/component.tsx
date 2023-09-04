'use client';

import { Card, CardFooter, Image, Button, Link } from '@nextui-org/react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny text-white/80'>Số tập - Độ tuổi - Độ trùng khớp.</p>
          <div className='justify-between hidden sm:flex'>
            <Button
              className='text-white w-2 h-2 bg-white hover:bg-slate-300 sm:w-5 sm:h-9'
              variant='flat'
              color='default'
            >
              {' '}
              <PlayArrowIcon className='text-black text-lg sm:text-3xl'></PlayArrowIcon>
            </Button>
            <Button
              className='text-tiny text-white w-2 h-2 bg-slate-900 hover:bg-slate-500 sm:w-5 sm:h-9'
              variant='flat'
              color='default'
            >
              <NotificationsActiveIcon className='text-lg sm:text-2xl'></NotificationsActiveIcon>
            </Button>
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
