import { Tabs, Tab, Card, CardBody, CardHeader } from '@nextui-org/react';
import CardEpsVideoPage from './card/cardEpsVideoPage';

export default function TabContent() {
  let tabs = [
    {
      id: 'episode',
      label: 'Tập phim',
    },
    {
      id: 'seasons',
      label: 'Phần phim khác',
    },
    {
      id: 'others',
      label: 'Phim tương tự',
    },
    {
      id: 'playlists',
      label: 'Danh sách của bạn',
    },
  ];

  const items = Array.from({ length: 10 });

  const renderCard = items.map((item, index) => <CardEpsVideoPage key={index}></CardEpsVideoPage>);

  return (
    <div className='flex flex-col w-full dark'>
      <Tabs aria-label='Dynamic tabs' items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {renderCard}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
