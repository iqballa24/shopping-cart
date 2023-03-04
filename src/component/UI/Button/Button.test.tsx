/**
 * skenario testing
 *
 * - Button component
 *  - should render button component correctly
 *  - should render button with primary style correctly
 *  - should render button with secondary style correctly
 *  - should render button with danger style correctly
 *  - should render button with full width correctly
 *  - should have attribut disabled when passed disabled props
 */

import React from 'react';
import Button from '@/component/UI/Button';
import { render, screen } from '@testing-library/react';

describe('button component', () => {
  it('should render component correctly', () => {
    render(
      <Button
        title="button"
        type="button"
        style="primary"
        onClick={() => jest.fn()}
      >
        button tester
      </Button>
    );

    const button = screen.getByText('button tester');

    expect(button).toBeInTheDocument();
  });

  it('should render button with primary style correctly', () => {
    render(
      <Button
        title="button"
        type="button"
        style="primary"
        onClick={() => jest.fn()}
      >
        button tester
      </Button>
    );

    const button = screen.getByText('button tester');

    expect(button).toHaveClass('bg-primary text-white hover:bg-primary/90');
  });

  it('should render button with secondary style correctly', () => {
    render(
      <Button
        title="button"
        type="button"
        style="secondary"
        onClick={() => jest.fn()}
      >
        button tester
      </Button>
    );

    const button = screen.getByText('button tester');

    expect(button).toHaveClass(
      'bg-transparent border text-primary border-primary hover:font-bold'
    );
  });

  it('should render button with danger style correctly', () => {
    render(
      <Button
        title="button"
        type="button"
        style="danger"
        onClick={() => jest.fn()}
      >
        button tester
      </Button>
    );

    const button = screen.getByText('button tester');

    expect(button).toHaveClass('bg-red-400 hover:bg-red-500 text-white');
  });

  it('should render button with full width correctly', () => {
    render(
      <Button
        title="button"
        type="button"
        style="danger"
        onClick={() => jest.fn()}
        isFull
      >
        button tester
      </Button>
    );

    const button = screen.getByText('button tester');

    expect(button).toHaveClass('w-full');
  });

  it('should have attribut disabled when passed disabled props', () => {
    render(
      <Button
        title="button"
        type="button"
        style="primary"
        onClick={() => jest.fn()}
        disabled
      >
        button tester
      </Button>
    );

    const button = screen.getByText('button tester');

    expect(button).toBeDisabled();
  });
});
