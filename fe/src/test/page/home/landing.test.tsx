import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import Landing from '../../../pages/landing/Landing';
// We need a router to test the components since our components are rendered in a Router
import { MemoryRouter } from 'react-router-dom';

test('When the banner is clicked, drawer button should be in the document', () => {
    render(
        <MemoryRouter>
            <Landing />
        </MemoryRouter>
    );

    const getPrescriptionButton = screen.getByText(/get prescription/i);
    const refillPrescriptionButton = screen.getByText(/refill prescription/i);
    expect(getPrescriptionButton).toBeInTheDocument();
    expect(refillPrescriptionButton).toBeInTheDocument();

    fireEvent.click(getPrescriptionButton);

    const verificationMessage = screen.getByText(/prescription verified!/i);
    expect(verificationMessage).toBeInTheDocument();
});
