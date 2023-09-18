'use client';
import { Avatar, Button, Textarea, User } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { Accordion, AccordionItem } from '@nextui-org/react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import Link from 'next/link';
import TabContent from '@/app/components/tabContent';
import Comment from '@/app/components/comment';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

interface episodeFormat {
  isInModal: boolean;
  isInVideoDetail: boolean;
}

// khi không tìm được kiểu dữ liệu thì ấn thẳng vào thư viện để xem cách thuộc tính và copy kiểu dữ liệu của nó ra luôn

export interface OnProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const defaultContent =
  '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »';

const playerVars = {
  playlist: [
    'https://firebasestorage.googleapis.com/v0/b/ecomm-1a83f.appspot.com/o/video%2FMusic2.mp4?alt=media&token=62ff5252-460e-4189-b35d-99628647251b',
    'https://www.dailymotion.com/embed/video/x8nxyq0?autoplay=1%22%20width=%22100%%22%20height=%22100%%22%20allowfullscreen%20title=%22Dailymotion%20Video%20Player%22%20allow=%22autoplay',
  ] as string[],
};

interface Link {
  formatId: number;
  link: string;
}

const Video = () => {
  const items = Array.from({ length: 10 });

  const renderComments = items.map((item, index: number) => (
    <Comment key={index} index={index}></Comment>
  ));

  return (
    <div className='py-[5%] md:justify-between mt-[11%] sm:max-md:mt-16 md:max-xl:mt-10 xl:mt-0 flex md:ml-[2.5%] w-[95%] justify-center'>
      <div className='w-[90%] sm:w-[68%]'>
        <div className='aspect-video'>
          <ReactPlayer
            url={playerVars.playlist[0]}
            width={'100%'}
            height={'100%'}
            controls={true}
          />
        </div>

        <section className='space-y-5'>
          <h1 className='mt-5 text:xl md:text-3xl md:mt-0'>
            Lorem ipsum dolor sit amet, consectetur adipisci elit
          </h1>
          <div className='flex justify-between'>
            <User
              name='Nhóm dịch'
              description={<Link href={'/'}>@Nhóm dịch</Link>}
              avatarProps={{
                src: 'https://i.pinimg.com/1200x/32/6f/7c/326f7cd6429cf76c88bd4d61c20ac716.jpg',
              }}
            />
            <div className='space-x-5'>
              <ThumbUpAltIcon />
              <ThumbDownIcon />
              <PlaylistPlayIcon />
              <ArrowCircleDownIcon />
            </div>
          </div>
          <section className='rounded-lg bg-zinc-900'>
            <h1 className='pt-3 ml-3'>Lượt xem: number, Ngày đăng: year, Thể loại: Category</h1>
            <article>
              {' '}
              <Accordion variant='light'>
                <AccordionItem
                  key='1'
                  aria-label='description'
                  subtitle='Mô tả'
                  id='accordion_item'
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab unde amet
                    neque! Voluptatibus, enim distinctio vitae a sit in facere earum. Tenetur
                    mollitia vero accusamus quod inventore molestiae possimus!
                  </p>
                </AccordionItem>
              </Accordion>
            </article>
          </section>

          <h2>Bình luận - $number</h2>

          <div className='pb-5'>
            <User
              name='You'
              description={<Link href={'/'}>@Your name</Link>}
              avatarProps={{
                src: 'https://i.pinimg.com/1200x/32/6f/7c/326f7cd6429cf76c88bd4d61c20ac716.jpg',
              }}
            />

            <form className='w-full space-y-1'>
              <Textarea
                variant='faded'
                // label='Description'
                labelPlacement='outside'
                placeholder='Nhập bình luận'
                // description='Enter a concise description of your project.'
                className='w-full dark'
              />
              <Button color='primary' className='float-right pd-5'>
                Gửi
              </Button>
            </form>
          </div>
          {renderComments}
        </section>
      </div>
      <div className='w-[26%] bg-black flex-col space-y-5 items-center hidden sm:block'>
        <TabContent></TabContent>
      </div>
    </div>
  );
};

export default Video;

// const url =
//   'https://drive.google.com/u/0/get_video_info?docid=1RSw_z1nETTgQ6i-Jr588Uz5kgH-RO-48&drive_originator_app=303';

// const linkhref = async () => {
//   const proxyUrl =
//     'http://localhost:8000/get_video_info?docid=1RSw_z1nETTgQ6i-Jr588Uz5kgH-RO-48&drive_originator_app=303';

//   const response = await fetch(proxyUrl);

//   console.log(response.text());
// };
