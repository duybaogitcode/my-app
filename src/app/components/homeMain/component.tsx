import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@nextui-org/react';
import CardComponent from '../card/component';
import Link from 'next/link';

const HomeMain = () => {
  const item = {
    title: 'Duy Bao',
    episodes: 13,
    category: ['Hài hước', 'Harem'],
  };

  return (
    <div>
      {/* Nếu navbar không có className='fixed' shouldHideOnScroll thì lúc để relative sẽ chiếm diện tích 
        và navbar không thể tự làm mờ trên nền ảnh được, còn có thì thêm thoải mái */}

      <div className='h-screen flex relative'>
        {/* Nếu muốn ảnh chiếm diện tích, và đẩy thẻ div dưới xuống thì dùng h-screen để thẻ div chiếm diện tích,
        không thì thẻ div dưới sẽ bị đẩy lên vì không có chiều cao và độ rộng được định nghĩa, vì chỉ có ảnh là có thuộc tính fill mà thôi */}
        <div className='h-full'>
          {/* Hình ảnh */}
          <Image
            src='https://images3.alphacoders.com/132/1322308.jpeg'
            layout='fill'
            objectFit='cover'
            alt='background'
          ></Image>

          {/* Gradient overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75'></div>
        </div>
        <div className='absolute left-10 top-1/2 sm:left-36 space-y-4'>
          <h1 className='font-bold text-3xl sm:text-5xl'>Đây là tiêu đề</h1>

          <Link href={'video'}>
            <Button className='bg-white w-24 h-9 sm:bg-white sm:w-32 sm:h-14 hover:bg-slate-300'>
              <PlayArrowIcon className='text-black text-3xl'></PlayArrowIcon>
            </Button>
          </Link>

          <Button className='bg-slate-400 h-9 w-24 sm:w-44 sm:h-14 hover:bg-slate-300 mx-2 '>
            {' '}
            <InfoIcon className='text-3xl'></InfoIcon>{' '}
            <span className='hidden sm:font-bold sm:flex'>Thông tin khác</span>
          </Button>
        </div>

        {/* Nên dùng absolute vì để nó không chiếm diện tích của thẻ div */}
        <div className='absolute top-[75%] md:max-xl:top-[85%] 2xl:top-3/4 space-y-3'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Anime mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
          </div>
        </div>
      </div>

      <div className='mt-32 sm:mt-28 space-y-10'>
        <div className='space-y-3'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Anime mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
          </div>
        </div>
        <div className='top3/4 space-y-3'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Anime mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
          </div>
        </div>
        <div className='space-y-3'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Anime mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
            <CardComponent item={item}></CardComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
