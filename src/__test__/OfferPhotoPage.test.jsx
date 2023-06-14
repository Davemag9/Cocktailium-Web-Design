import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { OfferPhotoPage } from '../pages/OfferPhotoPage';

describe('OfferPhotoPage', () => {

    test ('Render OfferPhotoPage', () => {
        render(
            <BrowserRouter>
                <OfferPhotoPage/>
            </BrowserRouter>
        )

        const button = screen.getByTestId('OfferButton');

        expect(button).toBeInTheDocument();
        expect(screen.getByTestId('OfferPhotoInstructions')).toBeInTheDocument();

        fireEvent.click(button)
        const location = window.location.pathname;
        setTimeout(() => {
            expect(location).toBe('/main')
        }, 1000);
    })
})