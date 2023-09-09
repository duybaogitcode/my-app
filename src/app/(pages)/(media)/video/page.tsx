'use client';
import { Button, Progress } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import axios from 'axios';
import { Envs } from '../../../ultis/envs';

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

  const preview = () => {
    console.log('Preview');
  };

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

  useEffect(() => {}, []);

  const cookieValue = 'H4HXB_j2Fd0';

  const handleProgress = (state: OnProgressProps) => {
    const currentTime = state.playedSeconds;
    const percentage = (currentTime / state.loadedSeconds) * 100;
    // console.log(percentage);
    setProgress(percentage);
  };

  return (
    <div className='h-screen'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <FullScreen handle={handleFullScreen} className='bg-white h-[730px] w-[1279px]'>
          <ReactPlayer
            url={
              'https://www.dailymotion.com/embed/video/x8nxyq0?autoplay=1%22%20width=%22100%%22%20height=%22100%%22%20allowfullscreen%20title=%22Dailymotion%20Video%20Player%22%20allow=%22autoplay'
            }
            // width={isFullScreen ? '100%' : '1279px'}
            // height={isFullScreen ? '100%' : '730px'}
            width={'100%'}
            height={'100%'}
            playing={playing}
            progressInterval={1000}
            onProgress={handleProgress}
            showPreview={preview}
          />
        </FullScreen>
        <section className='flex justify-between'>
          <Button onClick={() => setPlaying(!playing)}>{playing ? 'Tạm dừng' : 'Phát'}</Button>
          <Button onClick={handleFullScreen.enter}>Chế độ toàn màn hình</Button>
          <Button onClick={linkhref}>Link</Button>
        </section>
        {/* <Progress value={progress} className='max-w-md mx-auto' /> */}
      </div>
    </div>
  );
};

export default Video;
