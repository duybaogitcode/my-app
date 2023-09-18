import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import CardHomePage from '../card/cardHomePage';
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
            src='https://firebasestorage.googleapis.com/v0/b/ecomm-1a83f.appspot.com/o/Test%2F101455512_p0.jpg?alt=media&token=b41ce502-8d23-4a52-b1ab-763d57bda178'
            layout='fill'
            objectFit='cover'
            alt='background'
          ></Image>

          {/* Gradient overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75'></div>
        </div>
        <div className='absolute space-y-4 left-10 top-1/2 sm:left-36'>
          <h1 className='text-3xl font-bold sm:text-5xl'>Đây là tiêu đề</h1>
          <div className='flex items-center'>
            <Link
              href='/video'
              className='px-8 py-[2.5px] bg-white rounded-2xl sm:px-12 sm:py-4 hover:bg-slate-300'
            >
              <PlayArrowIcon className='text-3xl text-black'></PlayArrowIcon>
            </Link>
            <Button className='w-24 h-8 mx-2 bg-white sm:w-44 sm:h-14 hover:bg-slate-300 '>
              {' '}
              <InfoIcon className='text-3xl text-black'></InfoIcon>{' '}
              <Popover placement='bottom-start' showArrow={true}>
                <PopoverTrigger>
                  <span className='hidden sm:font-bold sm:flex text-black'>Thông tin khác</span>
                </PopoverTrigger>
                <PopoverContent className='opacity-60 bg-gradient-to-l from-white to-blue-400'>
                  <div className='px-1 py-2'>
                    <div className='font-bold text-black'>The Nun II</div>
                    <div className='font-bold text-black'>
                      A malevolent evil is spreading its boney demonic fingers across France in
                      1956.
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Button>
          </div>
        </div>
        {/* Nên dùng absolute vì để nó không chiếm diện tích của thẻ div */}
        <div className='absolute top-[75%] md:max-xl:top-[85%] 2xl:top-3/4 space-y-3 w-[96%] left-1/2 -translate-x-1/2'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Phim mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
          </div>
        </div>
      </div>

      <div className='mt-32 sm:mt-28 space-y-10'>
        <div className='space-y-3 w-[96%] mx-auto'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Phim mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
          </div>
        </div>
        <div className='space-y-3 w-[96%] mx-auto'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Phim mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
          </div>
        </div>
        <div className='space-y-3 w-[96%] mx-auto'>
          <h1 className='ml-[1.5%] sm:text-2xl md:text-3xl'>Phim mới nhất mùa</h1>
          <div className='w-[98%] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
            <CardHomePage item={item}></CardHomePage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
