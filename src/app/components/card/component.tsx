import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';

export interface Item {
  title: string;
  episodes: number;
  category: string[];
}

const CardComponent = ({ item }: { item: Item }) => {
  return (
    <Card
      className='border-none rounded-lg transform hover:scale-125 hover:z-10'
      isPressable
      onClick={() => console.log('test')}
    >
      <Image
        alt='Woman listing to music'
        src='https://images3.alphacoders.com/132/1322308.jpeg'
        className='object-cover'
      />
      <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
        <p className='text-tiny text-white/80'>Sắp tới.</p>
        {/* <Button
          className='text-tiny text-white bg-black/20'
          variant='flat'
          color='default'
          radius='lg'
          size='sm'
        >
          Nhắc tôi
        </Button> */}

        <NotificationsActiveIcon className='text-lg sm:text-2xl'></NotificationsActiveIcon>
      </CardFooter>
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
