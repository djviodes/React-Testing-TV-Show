import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

test('Will app render without errors', () => {
    mockFetchShow.mockResolvedValueOnce()
    render(<App />);
});