'use client';
import { Button, Progress } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});
const playerVars = {
  playlist: [
    'https://rr1---sn-npoe7ne6.c.drive.google.com/videoplayback?expire=1694035527&ei=F8T4ZPOTMrPI-LYP2qm-mAs&ip=2405:4802:9017:c3c0:e543:2ca8:63b1:23a2&cp=QVROVkFfVFVQSFhPOklrRjlTaGk3X05sQ2tDX1J2MFBmNlphaXR0RXBLUzREMm1uU0xUblRSMzk&id=a3029fd027e67d2a&itag=18&source=webdrive&requiressl=yes&mh=7e&mm=32&mn=sn-npoe7ne6&ms=su&mv=m&mvi=1&pl=44&sc=yes&ttl=transient&susc=dr&driveid=1qNeTdt2Aj-PdXVvM1rNKmOjC7PKWG0lZ&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=209.142&lmt=1694024589939150&mt=1694024470&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire%2Cei%2Cip%2Ccp%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Csusc%2Cdriveid%2Capp%2Cmime%2Cvprv%2Cprv%2Cdur%2Clmt&sig=AOq0QJ8wRAIfewjh4SdLXXduW3q7h5Es07cFScisIxsjg_0XGi2SzgIhAJ0h7H0SQIaJ_qO0_1WvD-otSJ6qIYpMvXlTMId-fF2W&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Csc&lsig=AG3C_xAwRQIgZ8FdoNJ2Sljqm8qv6KT3WzbZgEFvK64oVZqk5fxF3BYCIQCOf990mKqGJhCNhRTsIdVJ0WjotjcSbz1qe9G0zo9Q8A==',
    'https://rr1---sn-npoe7ne6.c.drive.google.com/videoplayback?expire=1694035527&ei=F8T4ZPOTMrPI-LYP2qm-mAs&ip=2405:4802:9017:c3c0:e543:2ca8:63b1:23a2&cp=QVROVkFfVFVQSFhPOklrRjlTaGk3X05sQ2tDX1J2MFBmNlphaXR0RXBLUzREMm1uU0xUblRSMzk&id=a3029fd027e67d2a&itag=22&source=webdrive&requiressl=yes&mh=7e&mm=32&mn=sn-npoe7ne6&ms=su&mv=m&mvi=1&pl=44&sc=yes&ttl=transient&susc=dr&driveid=1qNeTdt2Aj-PdXVvM1rNKmOjC7PKWG0lZ&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=209.142&lmt=1694024462015398&mt=1694024470&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire%2Cei%2Cip%2Ccp%2Cid%2Citag%2Csource%2Crequiressl%2Cttl%2Csusc%2Cdriveid%2Capp%2Cmime%2Cvprv%2Cprv%2Cdur%2Clmt&sig=AOq0QJ8wRQIgWpababpeUU-uHjcgNPpHwg4bDQLsIONAyyTfQLli7swCIQCTffr0L90alPKYZ8EwojLXtCxX3pPrFZHjTxO8XLxcJA==&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Csc&lsig=AG3C_xAwRgIhAIoynaA8Pt6Or2yP7m8EQMN5v6PXcjx5cgJxH72Hny9aAiEA0Nb_m6BOsPwIlrqyiQ3lFZOdvtBm0GMPqbyf9A1C2oI=',
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
  const [ipVersion, setIpVersion] = useState(''); // Lưu phiên bản IP của người dùng (IPv4 hoặc IPv6)

  const [progress, setProgress] = useState(0);

  const handleFullScreen = useFullScreenHandle();

  const detectIPVersion = () => {
    fetch('https://api64.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        if (data.ip.includes(':')) {
          // Đây là địa chỉ IPv6
          setIpVersion('IPv6');
        } else {
          // Đây là địa chỉ IPv4
          setIpVersion('IPv4');
        }
      })
      .catch((error) => {
        console.error('Lỗi khi xác định địa chỉ IP:', error);
      });
  };

  useEffect(() => {
    detectIPVersion(); // Xác định phiên bản IP khi thành phần được tải
  }, []);

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
            url={ipVersion === 'IPv6' ? playerVars.playlist[1] : playerVars.playlist[0]}
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
