'use client';
import { Button, Progress } from '@nextui-org/react';
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

interface Link {
  formatId: number;
  link: string;
}

const Video = () => {
  const [playing, setPlaying] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [progress, setProgress] = useState(0);

  const handleFullScreen = useFullScreenHandle();
  const [duration, setDuration] = useState(0);

  const handleFullScreenToggle = () => {
    if (isFullScreen) {
      handleFullScreen.exit();
    } else {
      handleFullScreen.enter();
    }
    setIsFullScreen(!isFullScreen);
  };

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
    <div className='py-[5%] grid grid-row-3 grid-flow-col gap-4'>
      <div className=' row-span-3 '>
        <FullScreen handle={handleFullScreen} className='h-[730px] w-[1279px] relative'>
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
            onMouseDown={() => console.log('video')}
          />
          <section className='flex items-center absolute top-[95%] w-[100%]'>
            <div onClick={() => setPlaying(!playing)}>
              {playing ? <PauseIcon></PauseIcon> : <PlayArrowIcon></PlayArrowIcon>}
            </div>

            {/* <span>Thời lượng: {duration} giây</span> */}
            <Progress value={progress} className='max-w-[90%] mx-auto' color='danger' />

            <div onClick={handleFullScreenToggle}>
              {isFullScreen ? (
                <FullscreenExitIcon></FullscreenExitIcon>
              ) : (
                <FullscreenIcon></FullscreenIcon>
              )}
            </div>
          </section>
        </FullScreen>
      </div>
      <div className='ml-7 col-span-2'>
        <TabComponent></TabComponent>
      </div>
      <div className='row-span-2 col-span-2'>{renderedEpisodes}</div>
    </div>
  );
};

export default Video;
