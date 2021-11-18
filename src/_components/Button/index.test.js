import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './index';

describe('Button', () => {
    test('renders Button component', () => {
        render(<Button />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});