import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { ByNamePage } from '../pages/ByNamePage';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('ByNamePage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test ('Render ByNamePage, if request.status == 200', async () => {

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
                <ByNamePage/>
            </BrowserRouter>
        )
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
        })
    })

    test('Render ByNamePage, if there are too much react', async () => {
        axios.get.mockRejectedValue(new Error('Error'));
    
        render(
          <BrowserRouter>
            <ByNamePage />
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
    
    test ('Render ByNamePage, if there are no cocktails', async () => {
        const mockCocks = [{ drinks : []}];

        axios.get.mockResolvedValue(mockCocks);

        render(
            <BrowserRouter>
                <ByNamePage/>
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

    test ('Render ByNamePage, if give new name', async () => {

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
                <ByNamePage/>
            </BrowserRouter>
        )
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
        })

        const search = screen.getByTestId('SearchBar');
        fireEvent.change(search, {target : { value : "TestCock"}});
        
        const searchB = screen.getByTestId('SearchBarButton');
        fireEvent.click(searchB);
        

        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        expect(axios.get).toHaveBeenCalledTimes(2);
        await waitFor(() => {
            expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
        })

    })
    
})