import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ListItem } from './index';

describe('ListItem', () => {
    test('render ListItem component', () => {
        render(<ListItem />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});