import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { ByLetterPage } from '../pages/ByLetterPage';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('ByLetterPage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test ('Render ByLetterPage, if request.status == 200', async () => {

        const mockCocks = [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }];


        axios.get.mockResolvedValue({ data: { drinks: mockCocks } });

        render(
            <BrowserRouter>
                <ByLetterPage/>
            </BrowserRouter>
        )
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
        })
    })

    test('Render ByLetterPage, if there are too much react', async () => {
        axios.get.mockRejectedValue(new Error('Error'));
    
        render(
          <BrowserRouter>
            <ByLetterPage />
          </BrowserRouter>
        );
    
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
    
        await waitFor(() => {
          expect(axios.get).toHaveBeenCalledTimes(1);
          setTimeout(() => {
            expect(screen.getByTestId('Vedmegatko')).toBeInTheDocument();
          }, 1000);
        })
    });

    

    test ('Render ByLetterPage, if change letter', async () => {

        const mockCocks = [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }];


        axios.get.mockResolvedValue({ data: { drinks: mockCocks } });

        render(
            <BrowserRouter>
                <ByLetterPage/>
            </BrowserRouter>
        )
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
        })

        const dropdown = screen.getByTestId('SelectLetter');
        fireEvent.change(dropdown, { target: { value: 'B' } });

        expect(dropdown.value).toBe('B');

        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(2);
        await waitFor(() => {
            expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
        })
    })
    
})
