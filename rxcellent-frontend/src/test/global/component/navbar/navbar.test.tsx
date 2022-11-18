import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavbarFC from '../../../../components/navbar/navbar';
// We need a router to test the components since our components are rendered in a Router
import { MemoryRouter } from 'react-router-dom';

test('On initial render, all buttons should be enabled', () => {
    render(
        <MemoryRouter>
            <NavbarFC />
        </MemoryRouter>
    );
    // Get a subcomponent from the rendered component
    const searchButton = screen.getByRole('button', { name: 'SearchButton' });
    // Check if it has the correct property and value
    expect(searchButton).toHaveProperty('disabled', false);
    // Check its styling
    expect(window.getComputedStyle(searchButton).alignItems).toBe('center');

    expect(screen.getByRole('button', { name: 'Are you a doctor?' })).toHaveProperty('disabled', false);
    expect(screen.getByRole('button', { name: 'Sign in/up' })).toHaveProperty('disabled', false);
});
