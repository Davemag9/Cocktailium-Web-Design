import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { GalleryPage } from '../pages/GalleryPage';

describe('GalleryPage', () => {

    test ('Render GalleryPage', () => {
        render(
            <BrowserRouter>
                <GalleryPage/>
            </BrowserRouter>
        )

        const button = screen.getByTestId('ToOfferButton');

        expect(button).toBeInTheDocument();
        expect(screen.getByTestId('PhotoContainer')).toBeInTheDocument();

        fireEvent.click(button)
        const location = window.location.pathname;
        expect(location).toBe('/post')
    })
})