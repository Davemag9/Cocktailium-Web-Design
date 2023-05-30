import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { Vedmegatko } from '../Vedmegatko';

describe('Vedmegatko', () => {

    test ('Render Vedmegatko', () => {
        render(
            <BrowserRouter>
                <Vedmegatko/>
            </BrowserRouter>
        )
        expect(screen.getByTestId('Vedmegatko')).toBeInTheDocument();
    })
})