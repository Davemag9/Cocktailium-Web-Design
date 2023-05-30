import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { Cocktail } from '../Cocktail';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe ('Cocktail', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test ('Render Cocktail, if request.status == 200', async () => {
        const mockId = '11007';
        const mockCocks = [{ drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure',
            strAlcoholic: 'Alcoholic',
            strVideo: null,
    
        }]}];
    
        axios.get.mockResolvedValue(mockCocks);
    
        render(
            <BrowserRouter>
                <Cocktail id = {mockId}/>
            </BrowserRouter>
        )
        
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            setTimeout(() => {
                // expect(screen.getByText('There is no cocktails. Try another name.')).toBeInTheDocument();
            }, 1000);
            
        })
    })

    test ('Render Cocktail, if there are no cocktails', async () => {
        const mockId = '11007';
        const mockCocks = [{ drinks : []}];
        axios.get.mockResolvedValue(mockCocks);

        render(
            <BrowserRouter>
                <Cocktail id = {mockId}/>
            </BrowserRouter>
        )
        
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(1);
            setTimeout(() => {
                expect(screen.getByText('There is no cocktails. Try another name.')).toBeInTheDocument();
            }, 1000);
            
        })
    })

    test('Render Cocktail, if there is an error', async () => {
        const mockId = '11007';
        axios.get.mockRejectedValue(new Error('Error'));
    
        render(
            <BrowserRouter>
                <Cocktail id = {mockId}/>
            </BrowserRouter>
        )
    
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
    
        await waitFor(() => {
          expect(axios.get).toHaveBeenCalledTimes(1);
          setTimeout(() => {
            expect(screen.getByTestId('Vedmegatko')).toBeInTheDocument();
        }, 1000);
          
        })
    });
})
