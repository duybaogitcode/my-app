import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

export default function TabComponent() {
  return (
    <div className='flex w-[95%] flex-col'>
      <Tabs aria-label='Options' className='w-full'>
        <Tab key='episodes' title='Tập phim'></Tab>
        <Tab key='seasons' title='Phần phim'></Tab>
        <Tab key='sameCategory' title='Tương tự'></Tab>
        <Tab key='Top' title='Top phim tuần'></Tab>
        <Tab key='List' title='Danh sách'></Tab>
      </Tabs>
    </div>
  );
}
