/**
 * skenario testing
 *
 * - Searchbar component
 *  - should render searchbar component correctly
 *  - should handle searhcbar typing correctly and call changeHandler function when typing
 *  - should call enterHandler when click enter
 */

import React from 'react';
import Searchbar from '@/component/UI/Searchbar';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';

describe('searchbar component', () => {
  const mockChangeHandler = jest.fn();
  const mockEnterHandler = jest.fn();

  it('should render searchbar component correctly', () => {
    render(
      <Searchbar
        changeHandler={mockChangeHandler}
        enterHandler={mockEnterHandler}
      />
    );

    const searchBar = screen.getByPlaceholderText('Search product');

    expect(searchBar).toBeInTheDocument();
  });

  it('should handle searhcbar typing correctly and call changeHandler function when typing', async () => {
    render(
      <Searchbar
        changeHandler={mockChangeHandler}
        enterHandler={mockEnterHandler}
      />
    );

    const searchBar = await screen.getByPlaceholderText('Search product');

    await userEvent.type(searchBar, 'searchbar input test');

    expect(mockChangeHandler).toBeCalled();
    expect(searchBar).toHaveValue('searchbar input test');
  });

  it('should call enterHandler when click enter', async () => {
    render(
      <Searchbar
        changeHandler={mockChangeHandler}
        enterHandler={mockEnterHandler}
      />
    );

    const searchBar = await screen.getByPlaceholderText('Search product');

    await fireEvent.keyDown(searchBar, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });

    expect(mockEnterHandler).toBeCalled();
  });
});
