/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Banner from '../../../../pages/shopping/components/banner';
// We need a router to test the components since our components are rendered in a Router
import { MemoryRouter } from 'react-router-dom';

test('When the banner is clicked, drawer button should be in the document', async () => {
    render(
        <MemoryRouter>
            <Banner />
        </MemoryRouter>
    );

    const bannerButton = screen.queryByRole('button', { name: 'Need prescription medications? Click here!' });
    const drawerButton = screen.queryByRole('button', { name: 'collapse drawer' });

    expect(bannerButton).toBeInTheDocument();
    expect(drawerButton).not.toBeInTheDocument();

    fireEvent.click(bannerButton!);

    expect(screen.queryByRole('button', { name: 'collapse drawer' })).toBeInTheDocument();
});
