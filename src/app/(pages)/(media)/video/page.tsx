'use client';
import { Button, Progress } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});
const playerVars = {
  playlist: [
    'https://rr2---sn-npoeenle.c.drive.google.com/videoplayback?expire=1694033470&ei=Drz4ZNePNbKLzN0PquKSwAk&ip=2405:4802:9017:c3c0:e543:2ca8:63b1:23a2&cp=QVROVkFfUlRVQVhPOklrRjdSbWI3X05sQ2tBX1dvMFBmNlphZ3N5WHBLUzREMmttWEVUblRSMzk&id=af5ae4323bc5097f&itag=22&source=webdrive&requiressl=yes&sc=yes&ttl=transient&susc=dr&driveid=1RSw_z1nETTgQ6i-Jr588Uz5kgH-RO-48&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=280.915&lmt=1694022358513899&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire%2Cei%2Cip%2Ccp%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Csusc%2Cdriveid%2Capp%2Cmime%2Cvprv%2Cprv%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKui10hCG1vEA1d-O3M-UjRsIPKQQF_fSiloSZUkqyaNAiBAzatuL0ZdjIp5I13JPXDBrw3y4MT3tK1nGD2TBZfUvg==&redirect_counter=1&cm2rm=sn-npodd7z&req_id=fe56cd5ddb86a3ee&cms_redirect=yes&cmsv=e&mh=2k&mm=34&mn=sn-npoeenle&ms=ltu&mt=1694022516&mv=m&mvi=2&pl=44&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgIBbXz9548NeMt4WMlsUBnFAhxtA6gVS6FhTD9S266ogCIQCYTCZsyx_i6_ycKwKnDapHIk16YC9WJEyu2JmfelnTQA%3D%3D',
  ],
};

// khi không tìm được kiểu dữ liệu thì ấn thẳng vào thư viện để xem cách thuộc tính và copy kiểu dữ liệu của nó ra luôn

export interface OnProgressProps {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const Video = () => {
  const [playing, setPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = useFullScreenHandle();

  const handleProgress = (state: OnProgressProps) => {
    const currentTime = state.playedSeconds;
    const percentage = (currentTime / state.loadedSeconds) * 100;
    // console.log(percentage);
    setProgress(percentage);
  };

  return (
    <div className='h-screen'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <FullScreen handle={handleFullScreen}>
          <ReactPlayer
            url={playerVars.playlist[0]}
            // sources={[
            //   {
            //     src: '<https://www.youtube.com/watch?v=j41oj0ChcUY&ab_channel=PhantasyPromotions>',
            //     type: 'video/mp4',
            //   },
            //   {
            //     src: '<https://www.youtube.com/watch?v=j41oj0ChcUY&ab_channel=PhantasyPromotions>',
            //     type: 'video/webm',
            //   },
            // ]}
            // tracks={[
            //   {
            //     src: '<https://www.youtube.com/watch?v=j41oj0ChcUY&ab_channel=PhantasyPromotions>',
            //     kind: 'subtitles',
            //     srclang: 'en',
            //   },
            //
            //     src   {: '<https://www.youtube.com/watch?v=j41oj0ChcUY&ab_channel=PhantasyPromotions>',
            //     kind: 'captions',
            //     srclang: 'en',
            //   },
            // ]}
            width={'100%'} // Đặt kích thước width là 100%
            height={'100%'} // Đặt kích thước height là 100%
            controls={false}
            playing={playing}
            progressInterval={1000}
            onProgress={handleProgress}
          />
        </FullScreen>
        <section className='flex justify-between'>
          <Button onClick={() => setPlaying(!playing)}>{playing ? 'Tạm dừng' : 'Phát'}</Button>
          <Button onClick={handleFullScreen.enter}>Chế độ toàn màn hình</Button>
        </section>
        {/* <Progress value={progress} className='max-w-md mx-auto' /> */}
      </div>
    </div>
  );
};

export default Video;
