'use client';
import { Avatar, Button, Pagination, Progress, Textarea, User } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import axios from 'axios';
import { Envs } from '../../../ultis/envs';
import Episode from '@/app/components/episode/component';
import TabComponent from '@/app/components/tabs/component';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import CommentComponent from '@/app/components/comment/component';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});
const playerVars = {
  playlist: [
    'https://rr2---sn-npoeene6.c.drive.google.com/videoplayback?expire=1694161708&ei=_LD6ZLSVDNCTrvIP_Ny3uA0&ip=2405:4802:9017:c3c0:e80d:3489:6172:dc94&cp=QVROVkJfUFdOSVhPOnNPUEg0bXlUaTltXzZBVjdCV1A0M0xQMTF6QkhsWEozUDlQMmdEMlc0Z1c&id=a3029fd027e67d2a&itag=37&source=webdrive&requiressl=yes&mh=7e&mm=32&mn=sn-npoeene6&ms=su&mv=m&mvi=2&pl=44&ttl=transient&susc=dr&driveid=1qNeTdt2Aj-PdXVvM1rNKmOjC7PKWG0lZ&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=209.142&lmt=1694037750178981&mt=1694150447&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire%2Cei%2Cip%2Ccp%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Csusc%2Cdriveid%2Capp%2Cmime%2Cvprv%2Cprv%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOra69-7QBkPKxscNQ6QBLpUGWzOQeK-3mVCl_zTuLleAiEA-w05kYoTwnm_-DejbyJqjHY0G-FW90jvg8Brd2PvIEg=&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIgXqlDHM2rOCQwNo7B5MRjNBS-Xu5YBvAzwZ6A829h8NQCIQClrC7kAgYAMKUimxvwho_2c9fdsfTtRPGZDnZ7nXtKaA==',
    'https://rr2---sn-npoeene6.c.drive.google.com/videoplayback?expire=1694161708&ei=_LD6ZLSVDNCTrvIP_Ny3uA0&ip=2405:4802:9017:c3c0:e80d:3489:6172:dc94&cp=QVROVkJfUFdOSVhPOnNPUEg0bXlUaTltXzZBVjdCV1A0M0xQMTF6QkhsWEozUDlQMmdEMlc0Z1c&id=a3029fd027e67d2a&itag=37&source=webdrive&requiressl=yes&mh=7e&mm=32&mn=sn-npoeene6&ms=su&mv=m&mvi=2&pl=44&ttl=transient&susc=dr&driveid=1qNeTdt2Aj-PdXVvM1rNKmOjC7PKWG0lZ&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=209.142&lmt=1694037750178981&mt=1694150447&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire%2Cei%2Cip%2Ccp%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Csusc%2Cdriveid%2Capp%2Cmime%2Cvprv%2Cprv%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOra69-7QBkPKxscNQ6QBLpUGWzOQeK-3mVCl_zTuLleAiEA-w05kYoTwnm_-DejbyJqjHY0G-FW90jvg8Brd2PvIEg=&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIgXqlDHM2rOCQwNo7B5MRjNBS-Xu5YBvAzwZ6A829h8NQCIQClrC7kAgYAMKUimxvwho_2c9fdsfTtRPGZDnZ7nXtKaA==',
  ] as string[],
};

const url =
  'https://drive.google.com/u/0/get_video_info?docid=1RSw_z1nETTgQ6i-Jr588Uz5kgH-RO-48&drive_originator_app=303';

// khi không tìm được kiểu dữ liệu thì ấn thẳng vào thư viện để xem cách thuộc tính và copy kiểu dữ liệu của nó ra luôn

export interface OnProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const defaultContent =
  '« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »';
interface Link {
  formatId: number;
  link: string;
}

const Video = () => {
  const [playing, setPlaying] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(true);

  const [progress, setProgress] = useState(0);

  const handleFullScreen = useFullScreenHandle();
  const [duration, setDuration] = useState(0);

  const [value, setValue] = useState<number | null>(4.5);

  const cmtItems = Array.from({ length: 4 });
  const cmtRenders = cmtItems.map((item, index: number) => (
    <CommentComponent key={index} index={index} />
  ));

  const linkhref = async () => {
    const proxyUrl =
      'http://localhost:8000/get_video_info?docid=1RSw_z1nETTgQ6i-Jr588Uz5kgH-RO-48&drive_originator_app=303';

    const response = await fetch(proxyUrl);

    console.log(response.text());
  };

  const handleProgress = (state: OnProgressProps) => {
    const currentTime = state.playedSeconds;
    const percentage = (currentTime / duration) * 100;
    setProgress(percentage);
  };

  const episodeItem = Array.from({ length: 10 });
  const renderedEpisodes = episodeItem.map((episode, index: number) => (
    <Episode key={index} index={index} />
  ));

  return (
    <div className='py-[5%] md:justify-between mt-[11%] sm:max-md:mt-16 md:max-xl:mt-10 xl:mt-0 flex md:ml-[2.5%] w-[95%] justify-center'>
      <div className='w-[68%]'>
        <FullScreen
          handle={handleFullScreen}
          className='relative aspect-video'
          onChange={() => setIsFullScreen(!isFullScreen)}
        >
          <ReactPlayer
            url={
              'https://www.dailymotion.com/embed/video/x8nxyq0?autoplay=1%22%20width=%22100%%22%20height=%22100%%22%20allowfullscreen%20title=%22Dailymotion%20Video%20Player%22%20allow=%22autoplay'
            }
            // width={isFullScreen ? '100%' : '1279px'}
            // height={isFullScreen ? '100%' : '730px'}
            width={'100%'}
            height={'100%'}
            playing={playing}
            progressInterval={10}
            onProgress={handleProgress}
            onDuration={(d) => setDuration(d)}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
          />
          <section className='flex items-center absolute top-[95%] w-[100%]'>
            <div onClick={() => setPlaying(!playing)}>
              {playing ? <PauseIcon></PauseIcon> : <PlayArrowIcon></PlayArrowIcon>}
            </div>

            {/* <span>Thời lượng: {duration} giây</span> */}
            <Progress value={progress} size='sm' className='max-w-[90%] mx-auto' color='danger' />
            {/* <input
              type='range'
              min={0}
              max={1}
              step={0.01}
              value={progress}
              onChange={handleSeek}
            /> */}

            <div>
              {isFullScreen ? (
                <div onClick={handleFullScreen.exit}>
                  <FullscreenExitIcon></FullscreenExitIcon>
                </div>
              ) : (
                <div onClick={handleFullScreen.enter}>
                  <FullscreenIcon></FullscreenIcon>
                </div>
              )}
            </div>
          </section>
        </FullScreen>
        <section className='space-y-5'>
          <h1 className='text:xl mt-5 md:text-3xl md:mt-0'>
            Lorem ipsum dolor sit amet, consectetur adipisci elit
          </h1>
          <div className='flex items-center space-x-4 flex-col sm:flex-row'>
            <User
              name='Nhóm dịch'
              description={<Link href='#'>@Nhóm dịch</Link>}
              avatarProps={{
                src: 'https://i.pinimg.com/1200x/32/6f/7c/326f7cd6429cf76c88bd4d61c20ac716.jpg',
              }}
            />

            <Rating name='read-only' value={value} readOnly />
          </div>
          <section className='bg-zinc-900 rounded-lg space-y-3'>
            <h1 className='ml-2'>Lượt xem: number Ngày đăng: year Thể loại: Category</h1>
            <article>
              {' '}
              <Accordion variant='light'>
                <AccordionItem key='1' aria-label='description' subtitle='Ấn để xem' title='Mô tả'>
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </article>
          </section>
        </section>

        <div className='space-y-5'>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Typography component='legend'>Đánh giá | Chấm điểm</Typography>
            <Rating
              name='simple-controlled'
              value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              className='bg-zinc-800'
            />
          </Box>
          <Textarea
            label='Bình luận'
            labelPlacement='outside'
            placeholder='Nhập bình luận của bạn...'
            className='w-full'
          />
        </div>

        {cmtRenders}
        <Pagination total={10} initialPage={1} />
      </div>
      <div className='hidden md:block w-[27%]'>
        <div className=' flex-col ml-[5%]'>
          <TabComponent></TabComponent>
          <h3 className='text-2xl'>Tập 1-10</h3>
        </div>
        <div className=''>{renderedEpisodes}</div>
      </div>
    </div>
  );
};

export default Video;
