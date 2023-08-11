import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListOfCodes, { ListOfCodesDataTestId } from 'renderer/views/ListOfCodes/ListOfCodes';

describe('ListOfCodes', () => {
  let element
  beforeEach(() => {
    element = render(<ListOfCodes />);
  });
  it('should render the ListOfCodes', () => {
    expect(element).toBeTruthy();
  });
  it('should consist the list of codes element', () => {
    expect(screen.getByTestId(ListOfCodesDataTestId)).toBeInTheDocument();
  });
});
