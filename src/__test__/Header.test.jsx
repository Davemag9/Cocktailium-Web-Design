import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header';

describe('Header', () => {

    test ('Render Header', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        expect(screen.getByText('Cocktail by letter')).toBeInTheDocument();
    })
})