import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

export default function TabComponent() {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options'>
        <Tab key='episodes' title='Tập phim'></Tab>
        <Tab key='seasons' title='Phần phim'></Tab>
        <Tab key='sameCategory' title='Tương tự'></Tab>
        <Tab key='Top' title='Top phim'></Tab>
      </Tabs>
    </div>
  );
}
