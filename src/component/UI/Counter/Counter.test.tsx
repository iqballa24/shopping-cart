/**
 * skenario testing
 *
 * - Counter component
 *  - should render counter component correctly
 *  - should call incrementCounter function when increment button is clicked
 *  - should call decrementCounter function when decrement button is clicked
 */

import React from 'react';
import Counter from '@/component/UI/Counter';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('counter component', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  it('should render counter component correctly', () => {
    render(
      <Counter
        value={0}
        decreaseHandler={mockDecrement}
        increaseHandler={mockIncrement}
      />
    );

    const valueContainer = screen.getByText(0);
    const buttonIncrement = screen.getByRole('button', {
      name: 'button_increment',
    });
    const buttonDecrement = screen.getByRole('button', {
      name: 'button_decrement',
    });

    expect(valueContainer).toBeInTheDocument();
    expect(buttonIncrement).toBeInTheDocument();
    expect(buttonDecrement).toBeInTheDocument();
  });

  it('should call incrementCounter function when increment button is clicked', async () => {
    render(
      <Counter
        value={0}
        decreaseHandler={mockDecrement}
        increaseHandler={mockIncrement}
      />
    );

    const buttonIncrement = screen.getByRole('button', {
      name: 'button_increment',
    });

    await userEvent.click(buttonIncrement);

    expect(mockIncrement).toBeCalled();
  });

  it('should call decrementCounter function when decrement button is clicked', async () => {
    render(
      <Counter
        value={0}
        decreaseHandler={mockDecrement}
        increaseHandler={mockIncrement}
      />
    );

    const buttonDecrement = screen.getByRole('button', {
      name: 'button_decrement',
    });

    await userEvent.click(buttonDecrement);

    expect(mockDecrement).toBeCalled();
  });
});
