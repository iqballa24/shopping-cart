/**
 * skenario testing
 *
 * - Tabsbar component
 *  - should render tabsbar component correctly
 *  - should call changeHandler function when click tabs
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import Tabsbar from '@/component/UI/Tabsbar';
import categories from '@/constant/categories';

describe('Tabsbar component', () => {
  const mockChangeHandler = jest.fn();

  it('should render tabsbar component correctly', () => {
    render(
      <Tabsbar tabs={categories} onChange={mockChangeHandler} checked="all" />
    );
    const labelAll = screen.queryByText('All');
    const labelElectronics = screen.queryByText('Electronics');
    const labelJewelry = screen.queryByText('Jewelry');
    const labelMenCloth = screen.queryByText('Men`s Clothing');
    const labelWomenCloth = screen.queryByText('Women`s Clothing');

    expect(labelAll).toBeInTheDocument();
    expect(labelElectronics).toBeInTheDocument();
    expect(labelJewelry).toBeInTheDocument();
    expect(labelMenCloth).toBeInTheDocument();
    expect(labelWomenCloth).toBeInTheDocument();
  });

  it('should call changeHandler function when click tabs', async () => {
    render(
      <Tabsbar tabs={categories} onChange={mockChangeHandler} checked="all" />
    );

    const tabsBar = screen.getByRole('radio', { name: 'Electronics' });

    await userEvent.click(tabsBar);

    expect(mockChangeHandler).toBeCalled();
  });
});
