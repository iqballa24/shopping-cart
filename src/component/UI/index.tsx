import React from 'react';

const AvatarImage = React.lazy(() => import('@/component/UI/AvatarImage'));
const Button = React.lazy(() => import('@/component/UI/Button'));
const Categories = React.lazy(() => import('@/component/UI/Categories'));
const Searchbar = React.lazy(() => import('@/component/UI/Searchbar'));

export { AvatarImage, Button, Categories, Searchbar };
