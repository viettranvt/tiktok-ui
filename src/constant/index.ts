import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export interface MenuItemProps {
  icon?: JSX.Element;
  code?: string;
  title: string;
  to?: string;
  separate?: Boolean;
  children?: MenuItemProps[];
}

export interface UserDto {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  nickname: string;
  avatar: string;
  bio: string;
  tick: boolean;
  followings_count: number;
  followers_count: number;
  likes_count: number;
  website_url: string;
  facebook_url: string;
  youtube_url: string;
  twitter_url: string;
  instagram_url: string;
  created_at: Date;
  updated_at: Date;
}
