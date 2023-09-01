'use client';

import SearchInput from '@/app/components/searchInput/component';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import Image from 'next/image';
export default function Navigation() {
  return (
    // Để shouldHideOnScroll hoạt đồng thì cần thêm fixed cái navbar lại
    <Navbar className='fixed' shouldHideOnScroll>
      <NavbarBrand>
        <p className='font-bold text-inherit'>AnimeWorld</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4 space-x-1' justify='center'>
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
          <Button>Đăng nhập</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
