'use client';

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CardEpisode from '../card/cardEpisode';

export interface Item {
  title: string;
  episodes: number;
  category: string[];
}

interface ModalEpisodeProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

type Season = {
  id: string;
  title: string;
};

export default function ModalEpisode() {
  const seasons: Season[] = [
    { id: '123', title: 'Phần 1: Mollit dolor eiusmod sunt ex incididunt cillum quis' },
    { id: '1234', title: 'Phần 2: Mollit dolor eiusmod sunt ex incididunt cillum quis' },
    { id: '12345', title: 'Phần 3: Mollit dolor eiusmod sunt ex incididunt cillum quis' },
  ];

  const episodePropsArray = Array.from({ length: 10 }).map(() => ({
    isInModal: true,
    isInVideoDetail: false,
  }));
  const renderedEpisodes = episodePropsArray.map((episodeProps, index) => (
    <CardEpisode key={index} episodeProps={episodeProps} />
  ));

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Tên Phim</ModalHeader>
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
    </>
  );
}
