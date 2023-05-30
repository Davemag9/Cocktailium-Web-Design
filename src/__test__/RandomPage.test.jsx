import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import { RandomPage } from '../pages/RandomPage';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('RandomPage', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test ('Render RandomPage, if request.status == 200', async () => {

        const mockCocks = [{ drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]}];

        for(let i = 0; i < 4; i+=1){
            axios.get.mockResolvedValue({data : mockCocks[i]});
        }

        render(
            <BrowserRouter>
                <RandomPage/>
            </BrowserRouter>
        )
        
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(4);
            setTimeout(() => {
                expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
            }, 1000);
            
        })
    })

    test ('Render RandomPage, if there are no cocktails', async () => {
        const mockCocks = [{ drinks : []}];

        axios.get.mockResolvedValue(mockCocks);

        render(
            <BrowserRouter>
                <RandomPage/>
            </BrowserRouter>
        )
        
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(4);
            setTimeout(() => {
                expect(screen.getByText('There is no cocktails. Try another name.')).toBeInTheDocument();
            }, 1000);
            
        })
    })

    test('Render RandomPage, if there are too much react', async () => {
        axios.get.mockRejectedValue(new Error('Error'));
    
        render(
          <BrowserRouter>
            <RandomPage />
          </BrowserRouter>
        );
    
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
    
        await waitFor(() => {
          expect(axios.get).toHaveBeenCalledTimes(4);
          setTimeout(() => {
            expect(screen.getByTestId('Vedmegatko')).toBeInTheDocument();
          }, 1000);
        })
    });

    test('Render RandomPage, if there is an error', async () => {
        axios.get.mockRejectedValue(new Error('Error'));
    
        render(
          <BrowserRouter>
            <RandomPage/>
          </BrowserRouter>
        );
    
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
    
        await waitFor(() => {
          expect(axios.get).toHaveBeenCalledTimes(4);
          setTimeout(() => {
            expect(screen.getByTestId('Vedmegatko')).toBeInTheDocument();
        }, 1000);
          
        })
    });

    test ('Render RandomPage, if there is button click', async () => {

        const mockCocks = [{ drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock5',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock6',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock7',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]},
        { drinks : [{
            idDrink: '666777',
            strDrink: 'TestCock8',
            strDrinkThumb: 'Shreck1<3',
            strInstructions: 'Instruction',
            strIngredient1: 'Ingredient',
            strMeasure1: 'Measure'
        }]}];

        for(let i = 0; i < 8; i+=1){
            axios.get.mockResolvedValue({data : mockCocks[i]});
        }
        
        render(
            <BrowserRouter>
                <RandomPage/>
            </BrowserRouter>
        )
        
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(4);
            setTimeout(() => {
                expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
            }, 1000);
        })

        const button = screen.getByText('Random cocktails!');
        fireEvent.click(button);

        expect(screen.getByTestId('Loader')).toBeInTheDocument();
        
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledTimes(8);
            setTimeout(() => {
                expect(screen.getByTestId('CardContainer')).toBeInTheDocument();
            }, 1000);
        })

    })
})
