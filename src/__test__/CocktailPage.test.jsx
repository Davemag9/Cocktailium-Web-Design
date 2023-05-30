import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from "axios";
import '@testing-library/jest-dom'
import { CocktailPage } from '../pages/CocktailPage';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';


describe('CocktailPage', () => {

    test('renders the Cocktail component with the correct id', async () => {
        const mockId = '666777';

        Object.defineProperty(window, 'location', {
            value: {
              href: `http://example.com?cocktailId=$${mockId}`
            },
            writable: true
          });

        render(
            <MemoryRouter>
              <CocktailPage />
            </MemoryRouter>
          )

        const cocktailElement = screen.getByTestId('Cocktail');
        const idAttribute = cocktailElement.getAttribute('id');
        setTimeout(() => {
            expect(idAttribute).toBe(mockId);
        }, 1000);
        
  });
});
