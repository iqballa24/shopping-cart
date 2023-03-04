/**
 * skenario testing
 *
 * - Tag component
 *  - should render tag component correctly
 */

import Tag from '@/component/UI/Tag';
import { render, screen } from '@testing-library/react';
import React from 'react';

test('should render tag component correctly', () => {
  render(<Tag text="tag component" />);

  const tag = screen.queryByText('tag component');

  expect(tag).toBeInTheDocument();
});
