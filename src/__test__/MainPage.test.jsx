import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

describe('MainPage', () => {

    test ('Render MainPage', () => {
        render(
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        )

        expect(screen.getByTestId('WelcomeText')).toBeInTheDocument();
    })
})