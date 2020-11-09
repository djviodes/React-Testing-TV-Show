import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';
jest.mock('./api/fetchShow');

test('Fetches and renders episodes data', async () => {
    mockFetchShow.mockResolvedValueOnce();
    render(<App />);
});