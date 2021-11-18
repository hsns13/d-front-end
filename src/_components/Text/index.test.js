import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { InputTextBox } from './index';

describe('InputTextBox', () => {
    test('render InputTextBox component', () => {
        render(<InputTextBox />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});