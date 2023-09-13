'use client';

import {
  Card,
  CardFooter,
  Image,
  Button,
  Link,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  SelectItem,
} from '@nextui-org/react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Episode from '../episode/component';

export interface Item {
  title: string;
  episodes: number;
  category: string[];
}

type Season = {
  id: string;
  title: string;
};

const CardComponent = ({ item }: { item: Item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const seasons: Season[] = [
    { id: '123', title: 'Phần 1: Mollit dolor eiusmod sunt ex incididunt cillum quis' },
    { id: '1234', title: 'Phần 2: Mollit dolor eiusmod sunt ex incididunt cillum quis' },
    { id: '12345', title: 'Phần 3: Mollit dolor eiusmod sunt ex incididunt cillum quis' },
  ];

  const episodeItem = Array.from({ length: 10 });
  const episodePropsArray = Array.from({ length: 10 }).map(() => ({
    isInModal: true,
    isInVideoDetail: false,
  }));
  const renderedEpisodes = episodePropsArray.map((episodeProps, index) => (
    <Episode key={index} episodeProps={episodeProps} />
  ));

  return (
    <Card
      className='border-none rounded-lg transform hover:scale-125 hover:z-10'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        alt='Woman listing to music'
        src='https://firebasestorage.googleapis.com/v0/b/ecomm-1a83f.appspot.com/o/Test%2Fthumb-1920-974218.jpg?alt=media&token=985a8310-7ef6-438f-934c-6145170ae5b7'
        className='object-cover aspect-video'
      />
      {isHovered && (
        <CardFooter className='flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny sm:text-lg text-center text-white/80'>
            Số tập - Độ tuổi - Độ trùng khớp
          </p>
          <div className='space-x-5 flex-row flex'>
            <Link href='/video'>
              <div className='flex justify-center items-center text-white w-5 h-5 bg-white rounded-full  hover:bg-slate-300 sm:w-7 sm:h-7 lg:w-10 lg:h-10'>
                {' '}
                <PlayArrowIcon className='text-black text-lg sm:text-xl lg:text-3xl'></PlayArrowIcon>
              </div>
            </Link>
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
              <ArrowDropDownIcon
                onClick={onOpen}
                className='text-lg sm:text-xl lg:text-2xl'
              ></ArrowDropDownIcon>
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
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Tên Anime</ModalHeader>
              <ModalBody>
                <Image
                  alt='Woman listing to music'
                  src='https://images3.alphacoders.com/132/1322308.jpeg'
                  className='object-cover'
                />
                <section className='mt-2'>
                  <h4>Độ trùng: 90% 2023 12 tập</h4>
                  <p>Độ tuổi - Thể loại: Hài hước, tình cảm</p>
                </section>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
                <Select
                  isRequired
                  label='Mùa phim'
                  defaultSelectedKeys={['123']}
                  className='max-w-xs'
                >
                  {seasons.map((season) => (
                    <SelectItem key={season.id} value={season.title}>
                      {season.title}
                    </SelectItem>
                  ))}
                </Select>
                <section className='space-y-5'>{renderedEpisodes}</section>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
