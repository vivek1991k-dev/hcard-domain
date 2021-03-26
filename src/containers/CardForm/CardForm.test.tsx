import React from 'react';
import { fireEvent, render,screen } from '@testing-library/react';
import { CardForm } from './CardForm.style';
import { RecoilRoot } from 'recoil';
import { card as cardAtom } from '../../state/atoms';
import { mockCardAtom } from '../../test/atom';
import { imageUrl } from './CardForm';

describe('unit tests for CardForm component', () => {
    it('should render the form and call method to set the values to localstorage on create button press', () => {
      render(
        <RecoilRoot initializeState={(snap) => snap.set(cardAtom, mockCardAtom)}>
          <CardForm cols={12}/>
        </RecoilRoot>
      );

      const mockSetItem = jest.fn();
      jest.spyOn(window.localStorage.__proto__, 'setItem');
      window.localStorage.__proto__.setItem = mockSetItem;

      const createButton = screen.queryByText('Create hCard');
      expect(createButton).toBeDefined();
      fireEvent.click(createButton as HTMLElement);
      expect(mockSetItem).toHaveBeenCalledWith('hCard', JSON.stringify(mockCardAtom));
      expect(mockSetItem).toHaveBeenCalledTimes(1);
    });

    it('should update the state and localstorage with the new country value', () => {
      render(
        <RecoilRoot initializeState={(snap) => snap.set(cardAtom, mockCardAtom)}>
          <CardForm cols={12}/>
        </RecoilRoot>
      );

      const mockSetItem = jest.fn();
      jest.spyOn(window.localStorage.__proto__, 'setItem');
      window.localStorage.__proto__.setItem = mockSetItem;

      const countryInput = screen.getByLabelText('input field for COUNTRY');
      expect(countryInput).toBeDefined();
      fireEvent.change(countryInput as HTMLElement, { target: { value: 'Test new country' }});
      
      const createButton = screen.queryByText('Create hCard');
      expect(createButton).toBeDefined();
      fireEvent.click(createButton as HTMLElement);
      expect(mockSetItem).toHaveBeenCalledWith('hCard', JSON.stringify({
        ...mockCardAtom,
        country: 'Test new country'
      }));
      expect(mockSetItem).toHaveBeenCalledTimes(1);
    });

    it('should update the image on click of the upload button', () => {
      render(
        <RecoilRoot initializeState={(snap) => snap.set(cardAtom, mockCardAtom)}>
          <CardForm cols={12}/>
        </RecoilRoot>
      );
      
      const mockSetItem = jest.fn();
      jest.spyOn(window.localStorage.__proto__, 'setItem');
      window.localStorage.__proto__.setItem = mockSetItem;

      const uploadButton = screen.queryByText('Upload Avatar');
      expect(uploadButton).toBeDefined();
      fireEvent.click(uploadButton as HTMLElement);
      
      const createButton = screen.queryByText('Create hCard');
      expect(createButton).toBeDefined();
      fireEvent.click(createButton as HTMLElement);
      expect(mockSetItem).toHaveBeenCalledWith('hCard', JSON.stringify({
        ...mockCardAtom,
        image: imageUrl
      }));
      expect(mockSetItem).toHaveBeenCalledTimes(1);
    });
});