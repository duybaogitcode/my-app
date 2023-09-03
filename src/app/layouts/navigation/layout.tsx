'use client';

import SearchInput from '@/app/components/searchInput/component';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log('Day la menu' + isMenuOpen);

  const menuItems = ['Trang chủ', 'Top Anime', 'Thể loại', 'Mùa'];

  const icons = ['Nhất mùa', 'Nhất tháng', 'Nhất tuần'];
  return (
    // Để shouldHideOnScroll hoạt đồng thì cần thêm fixed cái navbar lại
    //   Nếu navbar không có className='fixed' shouldHideOnScroll thì lúc để relative sẽ chiếm diện tích
    // và navbar không thể tự làm mờ trên nền ảnh được, còn có thì thêm thoải mái
    <Navbar
      className='fixed'
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <p className='font-bold text-inherit'>AnimeWorld</p>
      </NavbarBrand>

      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4 space-x-1' justify='center'>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent'
                radius='sm'
                variant='light'
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME features'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem key='autoscaling'>Autoscaling</DropdownItem>
            <DropdownItem key='usage_metrics'>Usage Metrics</DropdownItem>
            <DropdownItem key='production_ready'>Production Ready</DropdownItem>
            <DropdownItem key='99_uptime'>+99% Uptime</DropdownItem>
            <DropdownItem key='supreme_support'>+Supreme Support</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Top Anime
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Thể loại
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Mùa
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <SearchInput></SearchInput>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}>Đăng nhập</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
