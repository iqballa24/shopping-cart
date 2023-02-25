import React from 'react';

const AvatarImage = React.lazy(() => import('@/component/UI/AvatarImage'));
const Button = React.lazy(() => import('@/component/UI/Button'));
const Counter = React.lazy(() => import('@/component/UI/Counter'));
const Input = React.lazy(() => import('@/component/UI/Input'));
const Searchbar = React.lazy(() => import('@/component/UI/Searchbar'));
const Tabsbar = React.lazy(() => import('@/component/UI/Tabsbar'));
const Tag = React.lazy(() => import('@/component/UI/Tag'));

export { AvatarImage, Button, Counter, Input, Searchbar, Tabsbar, Tag };
