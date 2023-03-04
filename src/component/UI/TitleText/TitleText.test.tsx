/**
 * skenario testing
 *
 * - Titletext component
 *  - should render titletext component correctly
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import TitleText from '@/component/UI/TitleText';

test('should render titletext component correctly', () => {
  render(<TitleText text="title text component" />);

  const titleText = screen.queryByText('title text component');

  expect(titleText).toBeInTheDocument();
});
