import { User } from '@nextui-org/react';

export default function Comment({ index }: { index: number }) {
  return (
    <div className='space-y-2 mt-4 sm:mt-10'>
      {' '}
      <User
        name='User'
        description='@nguoiBinhLuan'
        avatarProps={{
          src: 'https://i.pinimg.com/1200x/32/6f/7c/326f7cd6429cf76c88bd4d61c20ac716.jpg',
        }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua.
      </p>
    </div>
  );
}
