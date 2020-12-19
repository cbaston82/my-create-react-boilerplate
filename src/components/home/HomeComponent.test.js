import React from 'react';
import { render } from '@testing-library/react';
import HomeComponent from './HomeComponent';

test('Renders App Title', () => {
    const { getByText } = render(<HomeComponent />);
    const linkElement = getByText(/RCN React App Boilerplate/i);
    expect(linkElement).toBeInTheDocument();
});
