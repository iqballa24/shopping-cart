/**
 * skenario testing
 *
 * - AvatarImage component
 *   - should render component correctly
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarImage from '@/component/UI/AvatarImage';

test('should render avatar component correctly', () => {
  render(<AvatarImage size={24} name="avatar image" />);

  const img = screen.getByRole('img');

  expect(img).toBeInTheDocument();
});
