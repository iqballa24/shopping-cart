/**
 * skenario testing
 *
 * - Modal component
 *  - should show modal when isShow props is true
 *  - should hidden modal when isShow props is false
 */

import React from 'react';
import Modal from '@/component/UI/Modal';
import { render, screen } from '@testing-library/react';

describe('Modal component', () => {
  it('should show modal when isShow props is true', () => {
    render(
      <Modal isShow={true} onClose={() => jest.fn()} title="Modal tester">
        <p>Modal tester component</p>
      </Modal>
    );

    const modalContainer = screen.queryByText('Modal tester component');

    expect(modalContainer).toBeInTheDocument();
  });

  it('should hidden modal when isShow props is false', () => {
    render(
      <Modal isShow={false} onClose={() => jest.fn()} title="Modal tester">
        <p>Modal tester component</p>
      </Modal>
    );

    const modalContainer = screen.queryByText('Modal tester component');

    expect(modalContainer).not.toBeInTheDocument();
  });
});
