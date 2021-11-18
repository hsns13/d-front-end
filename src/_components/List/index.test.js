import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { List } from './index';

describe('List', () => {
    test('renders List component', () => {
        render(<List />);
    });
});